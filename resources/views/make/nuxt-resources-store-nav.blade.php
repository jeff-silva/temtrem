export default {
	state() {
		return {
			items: [
				{
					label: "Dashboard",
					to: "/admin",
					children: [],
				},
				{
					label: "Configurações",
					to: "/admin/settings",
					children: [],
				},
				@foreach($schema->tables as $table)
				@if ($table->getConfig('in_nav')) 
				{
					label: "{{ $table->getConfig('plural') }}",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/{{ $table->Route }}",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/{{ $table->Route }}/0",
							children: [],
						},
					],
				},
				@endif
				@endforeach
			
			],
		};
	},
};