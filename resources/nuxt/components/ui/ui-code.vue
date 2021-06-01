<template><div class="ui-code bg-dark">
  <codemirror v-model="props.value" :options="compOptions" @update="emitValue()"></codemirror>
</div></template>

<style>
.ui-code .CodeMirror-cursor {height:16px!important;}
.ui-code .CodeMirror-line, .ui-code .CodeMirror-line * {font:16px monospace!important; line-height:16px!important;}
.ui-code .CodeMirror-code > * {}
.ui-code .CodeMirror {height:auto;}

.CodeMirror-hscrollbar::-webkit-scrollbar {width:8px; height:8px;}
.CodeMirror-hscrollbar::-webkit-scrollbar-track {background: transparent;}
.CodeMirror-hscrollbar::-webkit-scrollbar-thumb {background: #999; border-radius: 6px;}
</style>


<script>
/* themes:
3024-day 3024-night abcdef ambiance ayu-dark ayu-mirage base16-dark base16-light bespin
blackboard cobalt darcula dracula duotone-dark duotone-light eclipse elegant erlang-dark
gruvbox-dark hopscotch colorforth icecoder idea isotope lesser-dark liquibyte lucario
material-darker material-ocean material-palenight material mbo mdn-like midnight monokai
moxer neat neo night nord oceanic-next panda-syntax paraiso-dark paraiso-light pastel-on-dark
railscasts rubyblue seti shadowfox solarized solarized-dark solarized-light the-matrix
tomorrow-night-bright tomorrow-night-eighties ttcn twilight vibrant-ink xq-dark xq-light
yeti yonce zenburn
*/

import codemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/duotone-light.css';

import 'codemirror/mode/php/php.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

export default {
  components: {
    codemirror: codemirror.codemirror,
  },

  props: {
    value: {default:''},
    mode: {default:'htmlmixed'},
  },

  watch: {
    $props: {deep:true, handler(value) {
      this.props = Object.assign({}, value);
    }},
  },

  computed: {
    compOptions() {
      let mode = this.props.mode;
      if (mode=='html') { mode = 'htmlmixed'; }

      return {
        tabSize: 4,
        mode: mode,
        theme: 'duotone-light',
        lineNumbers: true,
        lineWrapping: false,
        line: true,
      };
    },
  },

  data() {
    let data = {};
    data.props = Object.assign({}, this.$props);
    return data;
  },

  methods: {
    emitValue() {
      this.$emit('input', this.props.value);
      this.$emit('change', this.props.value);
    },
  },

  mounted() {
    
  },
};
</script>
