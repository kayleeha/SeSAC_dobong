import { useForm } from "react-hook-form";

export default function ReactHookTest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = () => {};

  const onInValid = () => {};
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <label>
        <span>이름</span>{" "}
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.username?.message}
      </label>
      <br />
      <label>
        <span>나이</span>{" "}
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            validate: {
              isNumber: (val) => {
                const numVal = Number(val);
                if (numVal < 0) return "0 이상의 숫자만 입력 가능합니다";
              },
            },
          })}
        />
        {errors.age?.message}
      </label>
      <br />
      <button>제출</button>
    </form>
  );
}
