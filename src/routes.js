import Home from './components/Home/Home.vue';
import Posts from './components/Post/Posts.vue';
import Search from './components/Search/Search.vue';
import TestRoute from './components/Example/TestRoute.vue';
import BasicExamples from './components/Example/Basic.vue';
import Tree from './components/Tree/Tree.vue';
import Game from './components/Game/Game.vue';
import Dreams from './components/Dream/Dreams.vue';
import Multiple from './components/Example/Multiple.vue';
import User from './components/User/User.vue';
import Dynamic from './components/Dynamic/Dynamic.vue';
import Quote from './components/Quote/Index.vue';
import Form from './components/Form/Index.vue';
import FilterAndMixin from './components/FilterAndMixin/Index.vue';
import Style from './components/Style/Index.vue';
import GetAndPost from './components/GetAndPost/Index.vue';

export const routes = [
    {
        path: '', component: Home, name: 'home'
    },
    {
        path: '/posts', component: Posts
    },
    {
        path: '/testroute', component: TestRoute
    },
    {
        path: '/search', component: Search
    },
    {
        path: '/basicexamples', component: BasicExamples
    },
    {
        path: '/tree', component: Tree
    },
    {
        path: '/game', component: Game
    },
    {
        path: '/dreams', component: Dreams
    },
    {
        path: '/multiple', component: Multiple
    },
    {
        path: '/user', component: User
    },
    {
        path: '/dynamic', component: Dynamic
    },
    {
        path: '/quote', component: Quote
    },
    {
        path: '/form', component: Form
    },
    {
        path: '/filtermixin', component: FilterAndMixin
    },
    {
        path: '/style', component: Style
    },
    {
        path: '/getandpost', component: GetAndPost
    },
    {   path: '*', redirect: '/' }
];