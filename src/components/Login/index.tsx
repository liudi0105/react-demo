import AppButton from 'components/base/AppButton'
import Input from 'components/base/AppInput/Input'
import AppModal from 'components/base/AppModal'
import { Form, FormField, FormStore } from 'components/Form'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserService, { ILoginParam } from 'services/UserService'
import style from './index.module.scss'
import { IUserState, IUserAction, ICurrentUser } from 'reducers/userReducer'
import { IStore } from 'reducers'

interface LoginProps {
  visible: boolean
  setVisible: Function
}

let formStore = new FormStore<ILoginParam>()

const Login = (props: LoginProps) => {

  const { visible, setVisible } = props

  const loginService = UserService.getInstance()

  const dispatch = useDispatch <Dispatch<IUserAction>>()

  const handleLogin = async () => {
    const user: ICurrentUser = await loginService.login(formStore.values as ILoginParam)
    dispatch({ type: 'LOGIN', user })
    setVisible(false)
  }

  return (
    <div className={style.login}>
      <AppModal className={style.loginFrame} title="登录" setVisible={setVisible} visible={visible}>
        <Form store={formStore}>
          <FormField name="username" label='用户名：' className={style.usernameField}>
            <Input placeholder='测试账号：guest' className={style.usernameInput} />
          </FormField>
          <FormField name="password" label='密码：' className={style.passwordField}>
            <Input placeholder='测试密码：guest' className={style.passwordInput} type='password'/>
          </FormField>
          <AppButton onClick={handleLogin}>登录</AppButton>
        </Form>
      </AppModal>
    </div>
  )
}

export default Login