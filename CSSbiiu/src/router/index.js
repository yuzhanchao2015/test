import Vue from 'vue'
import Router from 'vue-router'
import Move from '@/components/Move'
import Home from '@/views/Home'
import One from '@/views/One'
import Two from '@/views/Two'
import Three from '@/views/Three'
import Four from '@/views/Four'
import Five from '@/views/Five'
import Six from '@/views/Six'
import Seven from '@/views/Seven'
import Eight from '@/views/Eight'
import Nine from '@/views/Nine'
import Ten from '@/views/Ten'
import Oneone from '@/views/Oneone'
import Onetwo from '@/views/Onetwo'
import Onethree from '@/views/Onethree'
import Onefour from '@/views/Onefour'
import Onefive from '@/views/Onefive'
import Onesix from '@/views/Onesix'
import Oneseven from '@/views/Oneseven'
import Oneeight from '@/views/Oneeight'
import Onenine from '@/views/Onenine'
import Twozero from '@/views/Twozero'
import notFound from '@/components/notFound'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'homeindex',
      component: Home
    },
    {
      path: '/move',
      name: 'move',
      component: Move
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
    {
      path: '/five',
      name: 'five',
      component: Five
    },
    {
      path: '/six',
      name: 'six',
      component: Six
    },
    {
      path: '/seven',
      name: 'seven',
      component: Seven
    },
    {
      path: '/eight',
      name: 'eight',
      component: Eight
    },
    {
      path: '/nine',
      name: 'nine',
      component: Nine
    },
    {
      path: '/ten',
      name: 'ten',
      component: Ten
    },
    {
      path: '/oneone',
      name: 'oneone',
      component: Oneone
    },
    {
      path: '/onetwo',
      name: 'onetwo',
      component: Onetwo
    },
    {
      path: '/onethree',
      name: 'onethree',
      component: Onethree
    },
    {
      path: '/onefour',
      name: 'onefour',
      component: Onefour
    },
    {
      path: '/onefive',
      name: 'onefive',
      component: Onefive
    },
    {
      path: '/onesix',
      name: 'onesix',
      component: Onesix
    },
    {
      path: '/oneseven',
      name: 'oneseven',
      component: Oneseven
    },
    {
      path: '/oneeight',
      name: 'oneeight',
      component: Oneeight
    },
    {
      path: '/onenine',
      name: 'onenine',
      component: Onenine
    },
    {
      path: '/twozero',
      name: 'twozero',
      component: Twozero
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
