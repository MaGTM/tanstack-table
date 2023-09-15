import { zodResolver } from '@hookform/resolvers/zod'
import { REQUIRED } from '@shared/lib/constants'
import { Button } from '@shared/ui/button'
import { ControlledInput } from '@shared/ui/input'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string(REQUIRED).nonempty('Обязательное поле'),
  password: z.string(REQUIRED).nonempty('Обязательное поле'),
})

type FormValues = z.infer<typeof schema>

interface ILoginFormProperties {
  goRegistration: VoidFunction
}

export const LoginForm = (props: ILoginFormProperties) => {
  const { goRegistration } = props

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col px-[1.39rem] py-[2.08rem]">
      <h2 className="text-center text-heading-2 font-medium">Войти</h2>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mt-[2.08rem] flex w-[20.13889rem] flex-col gap-[0.63rem]"
        noValidate
      >
        <ControlledInput
          control={control}
          name="email"
          placeholder="Email"
          type="email"
        />
        <ControlledInput
          control={control}
          name="password"
          placeholder="Пароль"
          type="password"
        />
        <Button text="Войти" type="submit" className="mt-[1.45rem]" />
      </form>
      <p className="mt-[0.83rem] text-center text-small">
        У вас ещё нет аккаунта?{' '}
        <button className="inline font-medium" onClick={goRegistration} type="button">
          Зарегистрироваться
        </button>
      </p>
      <button type="button" className="mt-[0.62rem] self-center text-small">
        Забыли пароль?
      </button>
    </div>
  )
}
