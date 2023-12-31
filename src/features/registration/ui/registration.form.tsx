import { zodResolver } from '@hookform/resolvers/zod'
import { REQUIRED } from '@shared/lib/constants'
import { Button } from '@shared/ui/button'
import { ControlledCheckbox } from '@shared/ui/checkbox'
import { ControlledInput } from '@shared/ui/input'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Slider } from './slider.component'
import { UserTypeSwitcher } from './user-type.switcher'

const schema = z
  .object({
    email: z.string(REQUIRED).email('Некорректная почта'),
    password: z.string(REQUIRED).min(6),
    confirmPassword: z.string(REQUIRED),
    isPersonal: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'], // path of error
  })

type FormValues = z.infer<typeof schema>

interface IRegistrationFormProperties {
  goLogin: VoidFunction
}

export const RegistrationForm = (props: IRegistrationFormProperties) => {
  const { goLogin } = props

  const { handleSubmit, control, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className="grid w-[45.13889rem] grid-cols-2 gap-[1.39rem] pl-[1.39rem]">
      <div className="py-[2.08rem]">
        <h2 className="text-center text-heading-2 font-medium">Зарегистрироваться</h2>
        <UserTypeSwitcher />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mt-[1.87rem] flex flex-col gap-[0.63rem]"
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
          <ControlledInput
            control={control}
            name="confirmPassword"
            placeholder="Повторите пароль"
            type="password"
          />
          <ControlledCheckbox
            label={
              <p>
                Я согласен на{' '}
                <Link to="/info" className="text-primary">
                  обработку персональных данных
                </Link>
              </p>
            }
            control={control}
            name="isPersonal"
          />
          <Button
            text="Зарегистрироваться"
            type="submit"
            disabled={!watch('isPersonal')}
          />
          <p className="text-center text-small">
            У вас уже есть аккаунт?{' '}
            <button className="inline font-medium" onClick={goLogin} type="button">
              Войти
            </button>
          </p>
        </form>
      </div>
      <div className="relative">
        <Slider />
      </div>
    </div>
  )
}
