import MainLayoutCom from '@/components/layout/MainLayout/MainLayout'
import { TChildrenProps } from '@/types'
import React from 'react'

const MainLayout = ({ children }: TChildrenProps) => {
  return (
    <div><MainLayoutCom>{children}</MainLayoutCom></div>
  )
}

export default MainLayout