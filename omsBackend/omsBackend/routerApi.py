# -*- coding: utf-8 -*-
# author: kiven

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

from users.views import UserViewSet, RoleViewSet, GroupViewSet

router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'roles', RoleViewSet)

from worktickets.views import WorkTicketViewSet, TicketCommentViewSet, TicketEnclosureViewSet, TicketTypeViewSet

router.register(r'worktickers', WorkTicketViewSet)
router.register(r'ticketcomments', TicketCommentViewSet)
router.register(r'ticketenclosures', TicketEnclosureViewSet)
router.register(r'tickettypes', TicketTypeViewSet)

from tools.views import UploadViewSet, SendmailViewSet, SendmessageViewSet, CalenderViewSet

router.register(r'upload', UploadViewSet)
router.register(r'sendmail', SendmailViewSet)
router.register(r'sendmessage', SendmessageViewSet)
router.register(r'calenders', CalenderViewSet)

from menus.views import FirstmenuViewSet, SecondmenuViewSet, ElementViewSet

router.register(r'firstmenus', FirstmenuViewSet)
router.register(r'secondmenus', SecondmenuViewSet)
router.register(r'menumetas', ElementViewSet)

from perms.views import UserMenuPermsViewSet, UserHostPermsViewSet, UserWikiPermsViewSet

router.register(r'usermenuperms', UserMenuPermsViewSet)
router.register(r'userhostperms', UserHostPermsViewSet)
router.register(r'userwikiperms', UserWikiPermsViewSet)

from threepay.views import (PlatformViewSet, MerchantViewSet, ThreePayEnclosureViewSet, PayChannelViewSet,
                            PayChannelNameViewSet, ThreePayCommentViewSet, PlatformPayChannelViewSet)

router.register(r'platforms', PlatformViewSet)
router.register(r'merchants', MerchantViewSet)
router.register(r'threepayenclosures', ThreePayEnclosureViewSet)
router.register(r'paychannels', PayChannelViewSet)
router.register(r'paychannelnames', PayChannelNameViewSet)
router.register(r'threepaycomments', ThreePayCommentViewSet)
router.register(r'platformpaychannels', PlatformPayChannelViewSet)

from wikis.views import WikiViewSet, OpsWikiViewSet

router.register(r'wikis', WikiViewSet)
router.register(r'opswikis', OpsWikiViewSet)

from hosts.views import HostViewSet, IdcViewSet, HostGroupViewSet

router.register(r'hosts', HostViewSet)
router.register(r'idcs', IdcViewSet)
router.register(r'hostgroups', HostGroupViewSet)

from jobs.views import JobsViewSet, DeployenvViewSet, DeploycmdViewSet, DeployJobsViewSet, DeployVersionViewSet, DeployTicketViewSet

router.register(r'jobs', JobsViewSet)
router.register(r'deployenvs', DeployenvViewSet)
router.register(r'deploycmds', DeploycmdViewSet)
router.register(r'deployjobs', DeployJobsViewSet)
router.register(r'deployversions', DeployVersionViewSet)
router.register(r'deploytickets', DeployTicketViewSet)

from records.views import RecordViewSet

router.register(r'records', RecordViewSet)

from projects.views import ProjectViewSet, ProjectCommentViewSet, ProjectEnclosureViewSet, ProjectTypeViewSet, \
    BugManagerViewSet, TestManagerViewSet, DemandManagerViewSet, DemandEnclosureViewSet

router.register(r'projects', ProjectViewSet)
router.register(r'projectcomments', ProjectCommentViewSet)
router.register(r'projectenclosures', ProjectEnclosureViewSet)
router.register(r'projecttypes', ProjectTypeViewSet)
router.register(r'bugmanagers', BugManagerViewSet)
router.register(r'testmanagers', TestManagerViewSet)
router.register(r'demandmanagers', DemandManagerViewSet)
router.register(r'demandenclosures', DemandEnclosureViewSet)

from optasks.views import OpsProjectViewSet, OpsProjectEnclosureViewSet, OpsProjectTypeViewSet, OpsDemandManagerViewSet, OpsDemandEnclosureViewSet

router.register(r'opsprojects', OpsProjectViewSet)
router.register(r'opsprojectenclosures', OpsProjectEnclosureViewSet)
router.register(r'opsprojecttypes', OpsProjectTypeViewSet)
router.register(r'opsdemandmanagers', OpsDemandManagerViewSet)
router.register(r'opsdemandenclosures', OpsDemandEnclosureViewSet)
