import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Container from '@/container/Container'
import Dashboard from '@/views/dashboard'

import User from '@/views/user'
import Student from '@/views/student'
import Teacher from '@/views/teacher'
import Overview from '@/views/overview'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Overview',
      name: 'Container',
      component: Container,
      children: [
        { path: 'Overview', name: 'Overview', component: Overview },
        {
          path: 'user', name: 'User', component: User,
          children: [
            { path: 'student', name: 'Student', component: Student, },
            { path: 'teacher', name: 'Teacher', component: Dashboard, }
          ]
        },
        {
          path: 'school', name: 'School', component: Dashboard,
          children: [
            { path: 'course', name: 'Course', component: Dashboard, }
          ]
        },
        {
          path: 'archivement', name: 'Archivement', component: Dashboard,
          children: [
            { path: 'envidence', name: 'Envidence', component: Dashboard, },
            { path: 'report', name: 'Report', component: Dashboard, }
          ]
        },
        {
          path: 'system', name: 'System', component: Dashboard,
          children: [
            { path: 'feedback', name: 'Feedback', component: Dashboard, }
          ]
        }
      ]
    }
  ]
})