import Vue from 'vue'
import Router from 'vue-router'
import Account from '../components/account/account.vue'
import Demand from '../components/demand/demand.vue'
import Program from '../components/program/program.vue'
import ProgramDetail from '../components/program-detail/program-detail.vue'
import Message from '../components/message/message.vue'
import Team from '../components/team/team.vue'
import BasicInfo from '../components/basic-info/basic-info.vue'
import MajorInfo from '../components/major-info/major-info.vue'
import Progress from '../components/progress/progress.vue'
import CreateProgress from '../components/create-progress/create-progress.vue'
import Result from '../components/result/result.vue'
import Dynamic from '../components/dynamic/dynamic.vue'
import CreateTask from '../components/create-task/create-task.vue'
import TaskDetail from '../components/task-detail/task-detail.vue'
import Discuss from '../components/discuss/discuss.vue'
import DiscussDetail from '../components/discuss-detail/discuss-detail.vue'
import CreateDiscuss from '../components/create-discuss/create-discuss.vue'
import File from '../components/file/file.vue'
import TeamMate from '../components/teammate/teammate.vue'
import Collect from '../components/collect/collect.vue'
import Report from '../components/report/report.vue'
import Feedback from '../components/feedback/feedback.vue'
import FeedbackDetail from '../components/feedback-detail/feedback-detail.vue'
import Cooperation from '../components/cooperation/cooperation.vue'
import Notice from '../components/notice/notice.vue'
import SignContract from '../components/sign_contract/sign_contract.vue'
import Contract from '../components/contract/contract.vue'
import Examine from '../components/examine/examine.vue'
import ExamineDetail from '../components/examine-detail/examine-detail.vue' 

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/program'
    },
    {
      path: '/program',
      component: Program
    },
    {
      path: '/program1',
      component: ProgramDetail,
      children: [{
          path: '/dynamic',
          component: Dynamic
        },
        {
          path: '/progress',
          component: Progress
        },
        {
          path: '/createprogress',
          component: CreateProgress
        },
        {
          path: '/createtask',
          component: CreateTask
        },
        {
          path: '/result',
          component: Result
        },
        {
          path: '/taskdetail',
          component: TaskDetail
        },
        {
          path: '/discuss',
          component: Discuss
        },
        {
          path: '/discussdetail',
          component: DiscussDetail

        },
        {
          path: '/creatediscuss',
          component: CreateDiscuss
        },
        {
          path: '/file',
          component: File
        },
        {
          path: '/teammate',
          component: TeamMate
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path:'/contract',
          component:Contract
        }
      ]
    },
    {
      path: '/message',
      component: Message,
      children: [{
          path: '/message/report',
          component: Report
        },
        {
          path: '/message/feedback',
          component: Feedback
        },
        {
          path: '/message/feedback/feedback1',
          component: FeedbackDetail
        }, {
          path: '/message/cooperation',
          component: Cooperation
        },
        {
          path: '/message/notice',
          component: Notice
        },
        {
          path:'/message/contract',
          component:SignContract
        },
        {
          path:'/message/examine',
          component:Examine
        },
        {
          path:'/message/examinedetail',
          component:ExamineDetail
        }
      ]
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/basicInfo',
      component: BasicInfo
    },
    {
      path: '/majorInfo',
      component: MajorInfo
    },
    {
      path: '/demand',
      component: Demand
    }
  ]
})
