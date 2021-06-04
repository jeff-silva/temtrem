<template><div class="ui-address">
    <div class="row">
        <div class="col-12 col-lg-8">
            <div class="input-group form-control p-0">
                <input type="text" class="form-control border-0" v-model="search.params.q" autocomplete="off-none"
                    placeholder="Busca" @keyup="searchAddresses()" />
                <div class="input-group-append"><div class="input-group-btn border-0">
                    <button type="button" class="btn rounded-0" @click="osmSearch({q:props.value.zipcode}, false)">
                        <i class="fa fa-fw fa-spin fa-spinner" v-if="search.loading"></i>
                        <i class="fa fa-fw fa-search" v-else></i>
                    </button>
                </div></div>
            </div>
            <div style="position:relative;">
                <div class="list-group list-group-flush bg-white shadow-sm" style="position:absolute; width:100%;">
                    <a href="javascript:;" class="list-group-item" v-for="r in search.results" @click="setValue(r); search.params.q=''; search.results=[];">
                        {{ r.route }}, {{ r.district }} - {{ r.city }}/{{ r.state }}
                    </a>
                </div>
            </div>
        </div>

        <div class="py-0 col-12"></div>

        <div class="pt-0 col-12 col-md-8"><input type="text" class="form-control" v-model="props.value.route" @keyup="emitValue();" placeholder="Rua"></div>
        <div class="pt-0 col-6 col-md-4"><input type="text" class="form-control" v-model="props.value.number" @keyup="emitValue();" placeholder="Nº"></div>
        <div class="pt-0 col-6 col-md-4"><input type="text" class="form-control" v-model="props.value.complement" @keyup="emitValue();" placeholder="Complemento"></div>
        <div class="pt-0 col-12 col-md-4"><input type="text" class="form-control" v-model="props.value.zipcode" @keyup="emitValue();" placeholder="CEP" v-mask="'#####-###'"></div>
        <div class="pt-0 col-12 col-md-4"><input type="text" class="form-control" v-model="props.value.city" @keyup="emitValue();" placeholder="Cidade"></div>
        <div class="pt-0 col-12 col-md-4"><input type="text" class="form-control" v-model="props.value.district" @keyup="emitValue();" placeholder="Bairro"></div>
        <div class="pt-0 col-6 col-md-4"><input type="text" class="form-control" v-model="props.value.state" @keyup="emitValue();" placeholder="Estado"></div>
        <div class="pt-0 col-6 col-md-4"><input type="text" class="form-control" v-model="props.value.country" @keyup="emitValue();" placeholder="País"></div>
    </div>

    <l-map v-if="mapBindComp" v-bind="mapBindComp" class="mt-2" style="height:200px; overflow:hidden; z-index:1;">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="mapBindComp.center" :draggable="true" @moveend="osmReverse({lat:$event.sourceTarget._latlng.lat, lon:$event.sourceTarget._latlng.lng})"></l-marker>
    </l-map>
</div></template>

<script>
export default {
    props: {
        value: Object,
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = Object.assign({}, value);
        }},
    },

    computed: {
        formattedAddress() {
            let addr=this.props.value, parts=[];
            if (addr.route) parts.push(addr.route);
            if (addr.number) parts.push(`Nº ${addr.number}`);
            if (addr.complement) parts.push(addr.complement);
            if (addr.zipcode) parts.push(`CEP ${addr.zipcode}`);
            if (addr.district) parts.push(addr.district);
            if (addr.city) parts.push(addr.city);
            if (addr.state) parts.push(addr.state);
            return parts.join(', ');
        },

        mapBindComp() {
            if (this.props.value && this.props.value.lat && this.props.value.lng) {
                return {
                    zoom: 16,
                    center: [
                        parseFloat(this.props.value.lat),
                        parseFloat(this.props.value.lng),
                    ],
                };
            }
            return false;
        },
    },

    methods: {
        emitValue() {
            this.$emit('input', this.props.value);
            this.$emit('value', this.props.value);
            this.$emit('change', this.props.value);
        },

        setValue(value) {
            for(let i in value) {
                this.props.value[i] = value[i];
            }
            this.setStateCodeFromName();
            this.emitValue();
        },

        placeToValue(place) {
            return {
                lat: place.lat,
                lng: place.lon,
                route: place.address.road||"",
                number: '',
                complement: '',
                zipcode: place.address.postcode,
                district: place.address.suburb,
                city: place.address.city,
                state: place.address.state,
                state_code: "",
                country: place.address.country,
                country_code: place.address.country_code.toUpperCase(),
            };
        },

        searchAddresses() {
            if (this._searchAddressesTimeout) clearTimeout(this._searchAddressesTimeout);
            this.search.loading = true;
            this._searchAddressesTimeout = setTimeout(() => {
                this.$axios.get(`https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=${this.search.params.q}`).then(resp => {
                    this.search.loading = false;
                    this.search.results = resp.data.map(place => {
                        return this.placeToValue(place);
                    });
                }).catch(error => {
                    this.search.loading = false;
                });
            }, 1000);
        },

        setStateCodeFromName() {
            if (!this.props.value.state) return;

            let states = {
                "Acre": "AC",
                "Alagoas": "AL",
                "Amapá": "AP",
                "Amazonas": "AM",
                "Bahia": "BA",
                "Ceará": "CE",
                "Distrito Federal": "DF",
                "Espírito Santo": "ES",
                "Goiás": "GO",
                "Maranhão": "MA",
                "Mato Grosso": "MT",
                "Mato Grosso do Sul": "MS",
                "Minas Gerais": "MG",
                "Pará": "PA",
                "Paraíba": "PB",
                "Paraná": "PR",
                "Pernambuco": "PE",
                "Piauí": "PI",
                "Rio de Janeiro": "RJ",
                "Rio Grande do Norte": "RN",
                "Rio Grande do Sul": "RS",
                "Rondônia": "RO",
                "Roraima": "RR",
                "Santa Catarina": "SC",
                "São Paulo": "SP",
                "Sergipe": "SE",
                "Tocantins": "TO",
            };

            this.props.value.state_code = states[this.props.value.state]||"";
            this.emitValue();
        },

        // https://nominatim.org/release-docs/develop/api/Reverse/
        osmReverse(params={}) {
            params = Object.assign({
                format: "json",
                addressdetails: 1,
                extratags: 1,
                namedetails: 1,
                limit: 10,
                lat: 0,
                lon: 0,
            }, params);

            this.loading = true;
            this.$axios.get('https://nominatim.openstreetmap.org/reverse', {params}).then(resp => {
                let place = this.placeToValue(resp.data);
                this.setValue(place);
            });
        },
    },

    data() {
        let data = {};

        data.search = {
            loading: false,
            params: {q:""},
            results: [],
        };

        data.loading = false;
        data.searchResults = [];

        data.props = Object.assign({}, this.$props);
        data.props.value = Object.assign({
            lat: 0,
            lng: 0,
            route: '',
            number: '',
            complement: '',
            zipcode: '',
            district: '',
            city: '',
            state: '',
            st: '',
            country: '',
            co: '',
        }, data.props.value);

        return data;
    },

    // mounted() {
    //     window.addEventListener('click', this.documentClickHandle);
    // },

    // beforeDestroy() {
    //     window.removeEventListener('click', this.documentClickHandle);
    // },
};</script>


<style>

</style>