import AppFooter from 'components/layout/AppFooter'
import _ from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleList from './ArticleList'
import style from './index.module.scss'
import MenuItem from './MenuItem'
import { route } from './route'

interface IHomePageProps {
}

const HomePage = (props: IHomePageProps) => {

  const { category } = useParams()
  return (
    <div className={style.baseLayout}>
      <div className={style.content}>
        <div className={style.img}></div>
        <div className={style.contentContainer}>
          <div className={style.menuContainer}>
            {route.map(v => <MenuItem className={style.menuItem} type={_.uniqueId()} key={v.code} {...v} />)}
          </div>
          <div className={style.articleContainer}>
            <ArticleList category={`tech:${category}`} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default HomePage
