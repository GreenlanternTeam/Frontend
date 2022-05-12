import React, { SetStateAction, useEffect, useState } from "react";
import RegisterForm from "components/RegisterForm";
import Layout from "layout/layout";
import { useForm } from 'react-hook-form';

export interface FormValue {
  id: string
  password: string
  email: string
  password_confirm: string
  nickname: string
}

export interface CheckList {
  id: number
  data: string
  checked: boolean
}

const Register = () => {
  const { register, handleSubmit,watch, formState: { errors }} = useForm<FormValue>({
    mode: 'onBlur'});
  const [checkedList, setCheckedList] = useState<[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [dataList, setData] = useState<CheckList[]>([{id: 1, data: '[필수] 만 14세 이상', checked: false},
  {id: 2, data: '[필수] 이용약관', checked: false},
  {id: 3, data: '[필수] 개인정보 수집 및 이용동의', checked: false},
  {id: 4, data: '[선택] 정보 수신 동의', checked: false}]);
  

  const onAllCheckHandler = () => {
    if (isAllChecked) {
        setData(dataList.map(el => {
          return {...el, checked: true}
       }))
    } else {
      setData(dataList.map(el => {
        return {...el, checked: false}
     }))
    }
  }

  useEffect(() => {
    onAllCheckHandler()
  },[isAllChecked])

   return (
     <Layout>
       <RegisterForm  register={register} errors={errors} watch={watch} dataList={dataList} onAllCheckHandler={onAllCheckHandler} isAllChecked={isAllChecked} setIsAllChecked={setIsAllChecked}/>
     </Layout>
   )
}

export default Register;