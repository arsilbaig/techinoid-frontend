import React from 'react'
import MobileAppDevelopmentWrapper from './MobileAppDevelopmentWrapper'
import Breadcrumb from '../../common/Breadcrumb'
import PrototypeWrapper from './PrototypeWrapper'
import BlockChainWrapper from './BlockChainWrapper'

export default function BlockChainDetails() {
  return (
    <>
    <Breadcrumb pageName="Service Details" />
    <BlockChainWrapper/>
  </>
  )
}
