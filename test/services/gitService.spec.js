const chai = require('chai')
const sinon = require('sinon')
const https = require('https')
const PassThrough = require('stream').PassThrough

const gitJson = {
  'login': 'tonykung06',
  'id': 4104003,
  'avatar_url': 'https://avatars1.githubusercontent.com/u/4104003?v=4',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/tonykung06',
  'html_url': 'https://github.com/tonykung06',
  'followers_url': 'https://api.github.com/users/tonykung06/followers',
  'following_url': 'https://api.github.com/users/tonykung06/following{/other_user}',
  'gists_url': 'https://api.github.com/users/tonykung06/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/tonykung06/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/tonykung06/subscriptions',
  'organizations_url': 'https://api.github.com/users/tonykung06/orgs',
  'repos_url': 'https://api.github.com/users/tonykung06/repos',
  'events_url': 'https://api.github.com/users/tonykung06/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/tonykung06/received_events',
  'type': 'User',
  'site_admin': false,
  'name': null,
  'company': null,
  'blog': '',
  'location': null,
  'email': null,
  'hireable': null,
  'bio': null,
  'public_repos': 145,
  'public_gists': 11,
  'followers': 7,
  'following': 4,
  'created_at': '2013-04-09T12:45:22Z',
  'updated_at': '2017-08-19T07:47:59Z'
}

const repoJson = [
  {
    'id': 82696437,
    'name': 'advanced-nodejs',
    'full_name': 'tonykung06/advanced-nodejs',
    'owner': {
      'login': 'tonykung06',
      'id': 4104003,
      'avatar_url': 'https://avatars1.githubusercontent.com/u/4104003?v=4',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/tonykung06',
      'html_url': 'https://github.com/tonykung06',
      'followers_url': 'https://api.github.com/users/tonykung06/followers',
      'following_url': 'https://api.github.com/users/tonykung06/following{/other_user}',
      'gists_url': 'https://api.github.com/users/tonykung06/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/tonykung06/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/tonykung06/subscriptions',
      'organizations_url': 'https://api.github.com/users/tonykung06/orgs',
      'repos_url': 'https://api.github.com/users/tonykung06/repos',
      'events_url': 'https://api.github.com/users/tonykung06/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/tonykung06/received_events',
      'type': 'User',
      'site_admin': false
    },
    'private': false,
    'html_url': 'https://github.com/tonykung06/advanced-nodejs',
    'description': null,
    'fork': false,
    'url': 'https://api.github.com/repos/tonykung06/advanced-nodejs',
    'forks_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/forks',
    'keys_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/keys{/key_id}',
    'collaborators_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/collaborators{/collaborator}',
    'teams_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/teams',
    'hooks_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/hooks',
    'issue_events_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/issues/events{/number}',
    'events_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/events',
    'assignees_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/assignees{/user}',
    'branches_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/branches{/branch}',
    'tags_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/tags',
    'blobs_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/git/blobs{/sha}',
    'git_tags_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/git/tags{/sha}',
    'git_refs_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/git/refs{/sha}',
    'trees_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/git/trees{/sha}',
    'statuses_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/statuses/{sha}',
    'languages_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/languages',
    'stargazers_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/stargazers',
    'contributors_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/contributors',
    'subscribers_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/subscribers',
    'subscription_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/subscription',
    'commits_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/commits{/sha}',
    'git_commits_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/git/commits{/sha}',
    'comments_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/comments{/number}',
    'issue_comment_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/issues/comments{/number}',
    'contents_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/contents/{+path}',
    'compare_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/compare/{base}...{head}',
    'merges_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/merges',
    'archive_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/{archive_format}{/ref}',
    'downloads_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/downloads',
    'issues_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/issues{/number}',
    'pulls_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/pulls{/number}',
    'milestones_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/milestones{/number}',
    'notifications_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/notifications{?since,all,participating}',
    'labels_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/labels{/name}',
    'releases_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/releases{/id}',
    'deployments_url': 'https://api.github.com/repos/tonykung06/advanced-nodejs/deployments',
    'created_at': '2017-02-21T15:36:02Z',
    'updated_at': '2017-02-21T16:08:35Z',
    'pushed_at': '2017-05-20T12:44:09Z',
    'git_url': 'git://github.com/tonykung06/advanced-nodejs.git',
    'ssh_url': 'git@github.com:tonykung06/advanced-nodejs.git',
    'clone_url': 'https://github.com/tonykung06/advanced-nodejs.git',
    'svn_url': 'https://github.com/tonykung06/advanced-nodejs',
    'homepage': null,
    'size': 25,
    'stargazers_count': 0,
    'watchers_count': 0,
    'language': 'JavaScript',
    'has_issues': true,
    'has_projects': true,
    'has_downloads': true,
    'has_wiki': true,
    'has_pages': false,
    'forks_count': 0,
    'mirror_url': null,
    'open_issues_count': 0,
    'forks': 0,
    'open_issues': 0,
    'watchers': 0,
    'default_branch': 'master'
  }
]

chai.should()
const gitService = require('../../services/gitService')()

describe('GitService', function () {
  describe('GetUser', function () {
    let user = null
    let request = null

    beforeEach(function stubRequest () {
      request = sinon.stub(https, 'request')
    })

    beforeEach(function stubFirstCall () {
      const gitResponse = new PassThrough()
      gitResponse.write(JSON.stringify(gitJson))
      gitResponse.end()

      request.onFirstCall().callsArgWith(1, gitResponse).returns(new PassThrough())
    })

    beforeEach(function stubSecondCall () {
      const repoResponse = new PassThrough()
      repoResponse.write(JSON.stringify(repoJson))
      repoResponse.end()
      request.onSecondCall().callsArgWith(1, repoResponse).returns(new PassThrough())
    })

    beforeEach(function configTimeout () {
      this.timeout(10000)
    })

    beforeEach(async function subject () {
      user = await gitService.getUser('tonykung06')
    })

    afterEach(function () {
      request.restore()
    })

    it('makes github request with correct headers', function () {
      const params = request.getCall(0).args
      params[0].headers['User-Agent'].should.equal('gitExample')
    })

    it('makes correct API request path to grab repos', function () {
      request.getCall(1).args[0].path.should.equal('/users/tonykung06/repos')
    })

    it('makes correct API request path to grab user', function () {
      request.getCall(0).args[0].path.should.equal('/users/tonykung06')
    })

    it('returns user', function () {
      user.login.should.equal('tonykung06')
    })

    it('returns user\'s repos', function () {
      user.should.have.property('repos')
    })
  })
})
