<template>
  <div class="input">
    <label
      :for="id"
      class="input__label text-14"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      class="input__field"
      type="text"
      :placeholder="placeholder"
      @input="updateValue"
      v-model="inputValue"
      v-mask="maskValue"
      :class="[ error ? 'input__field--error' : '' ]"
    >
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask'

export default {
  name: 'UiInput',
  directives: {
    mask: VueMaskDirective
  },
  data() {
    return {
      maskValue: '',
      inputValue: ''
    }
  },
  mounted() {
    if (this.format === 'phone') {
      this.maskValue = '+7 (###) ###-##-##'
    } else {
      this.maskValue = ''
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'text'
    },
    format: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;

  &__label {
    color: var(--secondary-text);
    margin-bottom: 5px;
  }

  &__field {
    padding: 15px;
    border: 1px solid var(--input-border);
    border-radius: 5px;

    &--error {
      border-color: var(--red);
    }

    &:focus {
      border-color: var(--purple);
    }
  }
}
</style>
