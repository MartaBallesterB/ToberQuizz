<template>
  <div class="question">
    <div class="image-container" data-testid="image-container" :class="status">
      <img
        :alt="question.altText"
        :src="`${imagesBucket}/${countryCode}/${challengeNumber}/${questionNumber}.png`"
      />
    </div>
    <div class="input-container">
      <label>{{ questionNumber }} - </label
      ><input :disabled="status === 'valid'" v-model="inputText" />
      <button :disabled="status === 'valid'" @click="emitAnswer">✔️</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  ref,
  watch,
  toRefs,
  computed,
} from "vue";
import { CheckedAnswer, Question } from "../models";

enum Status {
  Error = "error",
  Clean = "clean",
  Valid = "valid",
}

export default defineComponent({
  emits: ["answer"],
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
    checkedAnswer: {
      type: Object as PropType<CheckedAnswer>,
    },
    questionNumber: { type: Number, required: true },
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  setup: (props, context) => {
    const { checkedAnswer, questionNumber } = toRefs(props);

    const inputText = ref("");
    const status = ref(Status.Clean);

    const emitAnswer = () => {
      context.emit(
        "answer",
        inputText.value.trim().replace(/\s{2,}/g, " "),
        questionNumber.value
      );
    };

    const setAnswer = (checkedAnswer?: CheckedAnswer) => {
      inputText.value = checkedAnswer?.text || "";
      status.value = !checkedAnswer
        ? Status.Clean
        : checkedAnswer.isValid
        ? Status.Valid
        : Status.Error;
    };

    onMounted(() => setAnswer(checkedAnswer.value));

    watch(checkedAnswer, () => setAnswer(checkedAnswer.value));

    const imagesBucket = computed(
      () => process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET
    );

    return {
      inputText,
      status,
      emitAnswer,
      imagesBucket,
    };
  },
});
</script>

<style scoped lang="scss">
.question {
  max-width: 100%;
  text-align: center;
  > .image-container {
    max-width: 100%;
    height: 0;
    padding-bottom: calc(100% - 24px);
    border: 12px solid var(--gray-color);
    &.valid {
      border-color: var(--success-color);
    }
    &.error {
      border-color: var(--danger-color);
    }
    img {
      max-width: 100%;
      width: stretch;
    }
  }
  > .input-container {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    input {
      width: 70%;
      @media (max-width: 500px) {
        width: 65%;
      }
    }
  }
}
</style>
