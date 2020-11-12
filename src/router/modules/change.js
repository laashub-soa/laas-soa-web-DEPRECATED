/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const changeRouter = {
  path: '/change',
  component: Layout,
  redirect: '/change/workflow/audit',
  name: '变更领域',
  meta: {
    title: '变更领域',
  },
  children: [
    {
      path: '/change/workflow',
      component: () => import('@/views/change/index'),
      name: '流程',
      meta: {title: '流程'},
      redirect: '/change/workflow/audit',
      children: [
        {
          path: '/change/workflow/audit',
          component: () => import('@/views/change/workflow/Audit'),
          name: '审批',
          meta: {title: '审批'}
        },
        {
          path: 'design',
          component: () => import('@/views/change/workflow/Struct'),
          name: '设计',
          meta: {title: '设计'}
        },
      ]
    },
    {
      path: '/change/change',
      component: () => import('@/views/change/index'),
      name: '变更业务',
      meta: {title: '变更'},
      redirect: '/change/change/develop/project_requirements',
      children: [
        {
          path: '/change/change/develop',
          component: () => import('@/views/change/index'),
          name: '研发',
          meta: {title: '研发'},
          redirect: '/change/change/develop/project_requirements',
          children: [
            // {
            //   path: '/change/change/develop/project_requirements',
            //   name: '项目需求',
            //   component: () => import('@/views/change/change/develop/project_requirements/ProjectRequirements'),
            //   meta: {title: '项目需求'}
            // },
            {
              path: '/change/change/develop/project_build',
              component: () => import('@/views/change/index'),
              name: '项目构建',
              meta: {title: '项目构建'},
              redirect: '/change/change/develop/project_build/build_project',
              children: [
                // // 数据
                // {
                //   path: 'config_git_repository_data',
                //   name: '配置代码仓库数据',
                //   component: () => import('@/views/change/change/develop/project_build/ConfigCodeRepositoryData'),
                //   meta: {title: '配置代码仓库数据'}
                // },
                // {
                //   path: 'config_docker_repository_data',
                //   name: '配置docker仓库数据',
                //   component: () => import('@/views/change/change/develop/project_build/ConfigDockerRepositoryData'),
                //   meta: {title: '配置docker仓库数据'}
                // },
                // {
                //   path: 'config_project_build_info_data',
                //   name: '配置项目构建信息数据',
                //   component: () => import('@/views/change/change/develop/project_build/ConfigProjectBuildInfoData'),
                //   meta: {title: '配置项目构建信息数据'}
                // },
                // // 指令
                // {
                //   path: 'config_project_build_business',
                //   name: '配置项目构建指令',
                //   component: () => import('@/views/change/change/develop/project_build/ConfigProjectBuildBusiness'),
                //   meta: {title: '配置项目构建指令'}
                // },
                // 动作
                {
                  path: 'build_project',
                  name: '构建项目',
                  component: () => import('@/views/change/change/develop/project_build/BuildProject'),
                  meta: {title: '构建项目'}
                },
              ]
            },
            {
              path: 'config_file',
              name: '配置文件',
              // component: () => import('@/views/nested/menu1/index'),
              meta: {title: '配置文件'}
            },
            {
              path: 'project_deploy',
              name: '项目部署',
              // component: () => import('@/views/nested/menu1/index'),
              meta: {title: '项目部署'}
            },

            {
              path: 'database',
              name: '数据库',
              // component: () => import('@/views/nested/menu1/index'),
              meta: {title: '数据库'}
            },
            {
              path: 'plan_task',
              name: '计划任务',
              // component: () => import('@/views/nested/menu1/index'),
              meta: {title: '计划任务'}
            }
          ]
        },

      ]
    },
  ]
}

export default changeRouter
