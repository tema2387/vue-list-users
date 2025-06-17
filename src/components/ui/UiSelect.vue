<template>
  <div class="select" v-click-outside="closeList">
    <label
      :for="id"
      class="select__label text-14"
    >
      {{ label }}
    </label>
    <div
      class="select__field-wrapper"
      @click="toggleList"
    >
      <input
        :id="id"
        ref="input"
        class="select__field"
        v-model="displayValue"
        :placeholder="placeholder"
        readonly
        :class="[selectOpen ? 'select__field--open' : '']"
      >
      <div
        class="select__arrow"
        :class="[selectOpen ? 'select__arrow--open' : '']"
      >
        <Arrow />
      </div>
    </div>
    <div v-if="selectOpen" class="select__list">
      <div
        v-if="options.length > 0"
        class="select__option"
        @click.stop="resetSelect"
      >
        Не выбрано
      </div>
      <div
        v-for="option in options"
        :key="option.id"
        class="select__option"
        :class="[option.id === selectedValue ? 'select__option--selected' : '']"
        @click.stop="selectOption(option)"
      >
        #{{ option.id }} {{ option.name }}
      </div>
      <div
        v-if="options.length === 0"
        class="select__option select__option--empty"
      >
        Пользователи не найдены
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import Arrow from '@/components/svg/Arrow.vue'

export default {
  name: 'UiSelect',
  components: {
    Arrow
  },
  data() {
    return {
      selectedValue: null,
      selectOpen: false,
      displayValue: null
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Select'
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggleList() {
      this.selectOpen = !this.selectOpen
    },
    closeList() {
      this.selectOpen = false
    },
    selectOption(option) {
      this.selectedValue = option.id
      this.displayValue = `#${option.id} ${option.name}`
      this.$emit('input', this.selectedValue)
      this.closeList()
    },
    resetSelect() {
      this.selectedValue = null
      this.displayValue = null
      this.closeList()
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  display: flex;
  flex-direction: column;

  &__label {
    color: var(--secondary-text);
    margin-bottom: 5px;
    cursor: pointer;
    max-width: max-content;
    width: 100%;
  }

  &__field-wrapper {
    position: relative;
  }

  &__field {
    width: 100%;
    padding: 15px 35px 15px 15px;
    border: 1px solid var(--input-border);
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    background: var(--white);

    &--open {
      border-color: var(--purple);
    }
  }

  &__arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &--open {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 5px;
    background: var(--white);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--input-border);
    border-radius: 10px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
  }

  &__option {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      background-color: var(--table-bg);
    }

    &--empty {
      text-align: center;
      color: var(--secondary-text);

      &:hover {
        background-color: transparent;
      }
    }

    &--selected {
      background-color: var(--table-bg);
      color: var(--purple);
    }
  }
}
</style>
