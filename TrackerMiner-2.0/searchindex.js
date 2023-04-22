Search.setIndex({docnames:["class-structs","classes","classes/DataProvider","classes/DataProviderIface","classes/Decorator","classes/DecoratorClass","classes/DecoratorFS","classes/DecoratorFSClass","classes/DecoratorInfo","classes/IndexingTree","classes/IndexingTreeClass","classes/Miner","classes/MinerClass","classes/MinerFS","classes/MinerFSClass","classes/MinerOnline","classes/MinerOnlineClass","classes/MinerProxy","classes/MinerProxyClass","constants","enums","flags","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:55},filenames:["class-structs.rst","classes.rst","classes/DataProvider.rst","classes/DataProviderIface.rst","classes/Decorator.rst","classes/DecoratorClass.rst","classes/DecoratorFS.rst","classes/DecoratorFSClass.rst","classes/DecoratorInfo.rst","classes/IndexingTree.rst","classes/IndexingTreeClass.rst","classes/Miner.rst","classes/MinerClass.rst","classes/MinerFS.rst","classes/MinerFSClass.rst","classes/MinerOnline.rst","classes/MinerOnlineClass.rst","classes/MinerProxy.rst","classes/MinerProxyClass.rst","constants.rst","enums.rst","flags.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"TrackerMiner.DataProvider":{begin:[2,1,1,""],begin_async:[2,1,1,""],begin_finish:[2,1,1,""],do_begin:[2,1,1,""],do_begin_async:[2,1,1,""],do_begin_finish:[2,1,1,""]},"TrackerMiner.Decorator":{delete_id:[4,1,1,""],do_finished:[4,1,1,""],do_items_available:[4,1,1,""],error_quark:[4,2,1,""],get_class_names:[4,1,1,""],get_data_source:[4,1,1,""],get_n_items:[4,1,1,""],next:[4,1,1,""],next_finish:[4,1,1,""],prepend_id:[4,1,1,""],set_priority_rdf_types:[4,1,1,""]},"TrackerMiner.Decorator.props":{class_names:[4,3,1,""],commit_batch_size:[4,3,1,""],data_source:[4,3,1,""],priority_rdf_types:[4,3,1,""]},"TrackerMiner.Decorator.signals":{finished:[4,4,1,""],items_available:[4,4,1,""]},"TrackerMiner.DecoratorError":{EMPTY:[20,5,1,""],PAUSED:[20,5,1,""]},"TrackerMiner.DecoratorFS":{prepend_file:[6,1,1,""]},"TrackerMiner.DecoratorInfo":{complete:[8,1,1,""],complete_error:[8,1,1,""],get_mimetype:[8,1,1,""],get_task:[8,1,1,""],get_url:[8,1,1,""],get_urn:[8,1,1,""],ref:[8,1,1,""],unref:[8,1,1,""]},"TrackerMiner.DirectoryFlags":{CHECK_DELETED:[21,5,1,""],CHECK_MTIME:[21,5,1,""],IGNORE:[21,5,1,""],MONITOR:[21,5,1,""],NONE:[21,5,1,""],NO_STAT:[21,5,1,""],PRESERVE:[21,5,1,""],PRIORITY:[21,5,1,""],RECURSE:[21,5,1,""]},"TrackerMiner.FilterPolicy":{ACCEPT:[20,5,1,""],DENY:[20,5,1,""]},"TrackerMiner.FilterType":{DIRECTORY:[20,5,1,""],FILE:[20,5,1,""],PARENT_DIRECTORY:[20,5,1,""]},"TrackerMiner.IndexingTree":{"new":[9,2,1,""],add:[9,1,1,""],add_filter:[9,1,1,""],clear_filters:[9,1,1,""],do_child_updated:[9,1,1,""],do_directory_added:[9,1,1,""],do_directory_removed:[9,1,1,""],do_directory_updated:[9,1,1,""],file_is_indexable:[9,1,1,""],file_is_root:[9,1,1,""],file_matches_filter:[9,1,1,""],get_default_policy:[9,1,1,""],get_filter_hidden:[9,1,1,""],get_master_root:[9,1,1,""],get_root:[9,1,1,""],list_roots:[9,1,1,""],new_with_root:[9,2,1,""],notify_update:[9,1,1,""],parent_is_indexable:[9,1,1,""],remove:[9,1,1,""],set_default_policy:[9,1,1,""],set_filter_hidden:[9,1,1,""]},"TrackerMiner.IndexingTree.props":{filter_hidden:[9,3,1,""],root:[9,3,1,""]},"TrackerMiner.IndexingTree.signals":{child_updated:[9,4,1,""],directory_added:[9,4,1,""],directory_removed:[9,4,1,""],directory_updated:[9,4,1,""]},"TrackerMiner.Miner":{do_paused:[11,1,1,""],do_progress:[11,1,1,""],do_resumed:[11,1,1,""],do_started:[11,1,1,""],do_stopped:[11,1,1,""],error_quark:[11,2,1,""],is_paused:[11,1,1,""],is_started:[11,1,1,""],pause:[11,1,1,""],resume:[11,1,1,""],start:[11,1,1,""],stop:[11,1,1,""]},"TrackerMiner.Miner.props":{progress:[11,3,1,""],remaining_time:[11,3,1,""],status:[11,3,1,""]},"TrackerMiner.Miner.signals":{paused:[11,4,1,""],progress:[11,4,1,""],resumed:[11,4,1,""],started:[11,4,1,""],stopped:[11,4,1,""]},"TrackerMiner.MinerError":{INVALID_COOKIE:[20,5,1,""],NAME_MISSING:[20,5,1,""],NAME_UNAVAILABLE:[20,5,1,""],PAUSED:[20,5,1,""],PAUSED_ALREADY:[20,5,1,""]},"TrackerMiner.MinerFS":{check_file:[13,1,1,""],do_filter_event:[13,1,1,""],do_finished:[13,1,1,""],do_finished_root:[13,1,1,""],do_move_file:[13,1,1,""],do_process_file:[13,1,1,""],do_process_file_attributes:[13,1,1,""],do_remove_children:[13,1,1,""],do_remove_file:[13,1,1,""],error_quark:[13,2,1,""],get_data_provider:[13,1,1,""],get_indexing_tree:[13,1,1,""],get_throttle:[13,1,1,""],get_urn:[13,1,1,""],has_items_to_process:[13,1,1,""],notify_finish:[13,1,1,""],query_urn:[13,1,1,""],set_throttle:[13,1,1,""]},"TrackerMiner.MinerFS.props":{data_provider:[13,3,1,""],processing_pool_ready_limit:[13,3,1,""],processing_pool_wait_limit:[13,3,1,""],root:[13,3,1,""],throttle:[13,3,1,""]},"TrackerMiner.MinerFS.signals":{finished:[13,4,1,""],finished_root:[13,4,1,""],move_file:[13,4,1,""],process_file:[13,4,1,""],process_file_attributes:[13,4,1,""],remove_children:[13,4,1,""],remove_file:[13,4,1,""]},"TrackerMiner.MinerFSError":{MINER_FS_ERROR_INIT:[20,5,1,""]},"TrackerMiner.MinerFSEventType":{CREATED:[20,5,1,""],DELETED:[20,5,1,""],MOVED:[20,5,1,""],UPDATED:[20,5,1,""]},"TrackerMiner.MinerOnline":{do_connected:[15,1,1,""],do_disconnected:[15,1,1,""],get_network_type:[15,1,1,""]},"TrackerMiner.MinerOnline.signals":{connected:[15,4,1,""],disconnected:[15,4,1,""]},"TrackerMiner.MinerProxy":{"new":[17,2,1,""]},"TrackerMiner.MinerProxy.props":{dbus_connection:[17,3,1,""],dbus_path:[17,3,1,""],miner:[17,3,1,""]},"TrackerMiner.NetworkType":{"3G":[20,5,1,""],EDGE:[20,5,1,""],GPRS:[20,5,1,""],LAN:[20,5,1,""],NONE:[20,5,1,""],UNKNOWN:[20,5,1,""],_3G:[20,5,1,""]},TrackerMiner:{DataProvider:[2,0,1,""],DataProviderIface:[3,0,1,""],Decorator:[4,0,1,""],DecoratorClass:[5,0,1,""],DecoratorError:[20,0,1,""],DecoratorFS:[6,0,1,""],DecoratorFSClass:[7,0,1,""],DecoratorInfo:[8,0,1,""],DirectoryFlags:[21,0,1,""],FilterPolicy:[20,0,1,""],FilterType:[20,0,1,""],IndexingTree:[9,0,1,""],IndexingTreeClass:[10,0,1,""],MINER_DBUS_INTERFACE:[19,3,1,""],MINER_DBUS_NAME_PREFIX:[19,3,1,""],MINER_DBUS_PATH_PREFIX:[19,3,1,""],MINER_ERROR_DOMAIN:[19,3,1,""],Miner:[11,0,1,""],MinerClass:[12,0,1,""],MinerError:[20,0,1,""],MinerFS:[13,0,1,""],MinerFSClass:[14,0,1,""],MinerFSError:[20,0,1,""],MinerFSEventType:[20,0,1,""],MinerOnline:[15,0,1,""],MinerOnlineClass:[16,0,1,""],MinerProxy:[17,0,1,""],MinerProxyClass:[18,0,1,""],NetworkType:[20,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"2nd":4,"abstract":[4,6,9,11,13,14,15,17],"boolean":9,"case":[2,9,13,20,21],"class":[3,5,7,8,10,12,14,16,18,20,21,24],"const":4,"default":[2,4,9,11,13,17,20,21],"enum":24,"float":[11,13],"function":[2,4,9,11,13],"int":[2,4,6,11,13],"mime\u00b9":8,"new":[2,4,6,8,9,11,13,15,16,17,19,20,21,26],"return":[2,4,6,8,9,11,13,15,17,20],"short":[4,9,11,13,15,17],"true":[9,11,13,15],"try":20,Bus:[19,20],For:[4,8,9,13,20,21],IDs:4,That:20,The:[2,4,8,9,11,13,15,19,20,21],There:20,Use:8,Used:19,Using:9,With:13,Yes:[4,6,11,13,15],_3g:[20,26],about:[2,9,11],accept:[9,13,20,26],access:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],accord:[9,13],action:20,activ:24,actual:[11,14],add:[4,9,13,26],add_filt:[9,26],added:[7,9,13,20],adding:[20,21],addit:13,affect:[9,13],after:11,all:[2,4,9,11,13,19,20],alloc:[9,13],allow:[2,9,13,19],alreadi:[4,11,20],also:9,alwai:[4,13],ani:[2,9,11,13,19],anoth:20,anytim:9,api:[5,7,9,10,12,14,16,20],append:13,appli:[9,13,20],applic:[4,11,20,24],argument:[9,13],around:13,arrai:4,ask:11,associ:[8,13],assum:[13,21],async:2,asynchron:[2,13],asyncreadycallback:[2,4],asyncresult:[2,4],attribut:[2,13],avail:[2,4,20],avoid:20,awai:21,back:13,base:[2,4,5,6,7,9,11,13,15,17,20,21],basenam:9,basic:4,batch:[4,13],becaus:20,becom:15,been:[4,11,13,20],befor:[2,4,13],begin:[2,3,26],begin_async:[2,3,26],begin_finish:[2,3,26],behavior:13,being:[4,13,21],benefit:24,between:[13,24],big:24,black:9,bool:[9,11,13,15],both:13,bug:24,builder:13,call:[2,4,9,11,13,20],callback:[2,4],caller:[4,11,13],can:[9,13,16,20],cancel:[2,4,13,17],cannot:11,canon:9,care:[5,7],carri:20,central:24,chang:[4,9,21],check:[13,21],check_delet:[21,26],check_fil:[13,26],check_mtim:[21,26],check_par:13,child:9,child_upd:[9,10],children:[2,9,13],children_onli:13,clase:13,class_nam:4,class_name_id:4,classmethod:[4,9,11,13,17],clear:[4,8,9],clear_filt:[9,26],comma:2,commit:4,commit_batch_s:4,common:9,compar:9,complet:[4,8,26],complete_error:[8,26],concurr:13,config:9,configur:[9,13],connect:[13,15,16,17,20],consecut:9,consid:9,consist:4,constant:24,construct:[11,13],construct_onli:[4,9,13,17],contact:24,contain:[9,11,13],content:[4,8,9,13,15,21],continu:13,cooki:20,correct:13,correspond:[6,13],could:21,count:8,crawl:[13,21],creat:[2,9,13,20,26],crucial:20,current:[11,13,20],custom:19,data:[2,4,8,11,13,14,15,19,24],data_provid:13,data_sourc:4,databas:[4,8,13],dataprovid:[13,21,25,26],dataproviderifac:[2,23,26],datasourc:4,dbu:[11,17],dbus_connect:17,dbus_path:17,dbusconnect:17,debian:24,decor:[1,6,11,20,22,26],decoratorclass:[0,4,7,26],decoratorerror:[20,26],decoratorf:[1,4,22,26],decoratorfsclass:[0,6,26],decoratorinfo:[4,26,27],decreas:8,defin:[2,20],delet:[4,13,20,21,26],delete_id:[4,26],deni:[9,20,26],depend:24,deriv:14,describ:[8,9],descript:[3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,24],desktop:24,dest:13,determin:13,devic:[9,20,24],differ:20,directori:[9,13,20,21,26],directories_found:13,directories_ignor:13,directory_ad:[9,10],directory_flag:9,directory_remov:[9,10],directory_upd:[9,10],directoryflag:[2,9,21,26],disabl:9,disappear:11,disconnect:[15,16,20],do_begin:2,do_begin_async:2,do_begin_finish:2,do_child_upd:9,do_connect:15,do_directory_ad:9,do_directory_remov:9,do_directory_upd:9,do_disconnect:15,do_filter_ev:13,do_finish:[4,13],do_finished_root:13,do_items_avail:4,do_move_fil:13,do_paus:11,do_process_fil:13,do_process_file_attribut:13,do_progress:11,do_remove_children:13,do_remove_fil:13,do_resum:11,do_start:11,do_stop:11,document:[2,4,8,9,20],doe:9,doesn:13,domain:[4,11,13,19],done:[11,20],doubl:13,due:9,duplic:20,dure:[2,8,13,20],edg:[20,26],effect:9,either:[9,11,13],elaps:13,element:[6,9],elig:13,els:13,email:20,emit:[4,9,11,13,15,20],empti:[20,26],ensur:4,entir:20,enumer:[2,20,21],enumerate_children:2,equal:9,equival:9,error:[2,4,8,9,11,13,15,17,19,20],error_quark:[4,11,13,26],essenti:4,estim:11,etc:[4,9,20,24],ethernet:20,evalu:[4,9],even:21,exampl:[2,4,8,9,19,20,24],execut:[2,13],exist:[4,8,13],expect:[11,13],explain:9,extend:[4,8],extern:11,extra:5,extract:[4,5,13,14],failur:2,fallback:9,fals:[9,13],far:11,faster:20,feed:2,file:[2,4,5,6,8,9,13,19,20,21,24,26],file_attribute_standard_nam:2,file_is_index:[9,26],file_is_root:[9,26],file_matches_filt:[9,26],file_typ:9,fileenumer:[2,13],fileinfo:13,files_found:13,files_ignor:13,filesystem:13,filetyp:9,filter:[9,20],filter_ev:14,filter_hidden:9,filterpolici:[9,20,26],filtertyp:[9,20,26],find:13,finish:[2,4,5,11,13,14],finished_root:[13,14],first:[4,11],flag:[2,4,9,11,13,15,17,20,24],flurish:4,foo:8,forc:21,found:[13,21],free:[4,8],freed:[2,9],freedesktop:19,from:[2,4,9,11,13,15],full:13,further:4,futur:[5,7,10,12,14,16],g_ifac:3,g_list_fre:9,gather:2,gener:[8,20],get:[4,8,9,13,15,21],get_class_nam:[4,26],get_data_provid:[13,26],get_data_sourc:[4,26],get_default_polici:[9,26],get_filter_hidden:[9,26],get_indexing_tre:[13,26],get_master_root:[9,26],get_mimetyp:[8,26],get_n_item:[4,26],get_network_typ:[15,26],get_root:[9,26],get_task:[8,26],get_task_data:8,get_throttl:[13,26],get_url:[8,26],get_urn:[8,13,26],gint:20,ginterfac:[2,4,6,11,13,15,17],gio:[2,4,6,8,9,11,13,15,17,24],gir1:24,gitlab:24,give:[4,11,13,20],given:[8,9,13,20,21],glib:[2,4,8,11,13,17,19,20,21,24],glob:9,glob_str:9,gnome:24,gobject:[2,3,4,6,9,10,11,12,13,15,17,18,22,24],gpr:[20,26],gquark:[4,11,13],graphupd:4,handl:[4,13],happen:[4,8,13],has:[4,11,13,20],has_items_to_process:[13,26],have:[4,11,20],here:9,hidden:9,hierarchi:24,higher:2,hold:13,home:9,homepag:24,host:20,how:11,hsdpa:20,http:[8,9,24],identifi:[4,8,11,13],idl:11,ignor:[2,9,13,21,26],implement:[2,3,5,11,12,13,14],implicitli:13,improv:[5,7,10,12,14,16],includ:13,increas:8,index:[4,9,13,15,21,24],indexing_tre:9,indexingtre:[1,10,13,20,21,22,26],indexingtreeclass:[0,9,26],indic:[4,11,13,15,21],inform:[2,4,8,20,24],inherit:[4,6,9,11,13,15,17],init:[4,6,11,13,15,17],initi:20,inspect:13,instead:[4,8],inter:19,interest:20,interfac:[2,3,19,24],intern:[4,11,13,21],internet:20,invalid_cooki:[20,26],io_prior:2,ioerrorenum:2,is_paus:[11,26],is_start:[11,26],issu:24,item:[2,4,9,13,20,21],items_avail:[4,5,20],its:[9,11,13],itself:[9,20],just:2,keep:13,kwarg:[4,6,9,11,13,15,17],lan:[20,26],layer:13,left:[3,4,12],let:13,level:[9,13],like:[2,13],limit:13,list:[2,4,9,24],list_root:[9,26],listen:4,listinfo:24,local:[20,21],locat:[8,9,13,24],longer:13,lower:2,mai:[4,9,11,20],mail:24,mailman:24,make:21,manag:17,mani:[11,13],map:24,martyn:9,master:9,match:[9,20],max:13,maximum:13,mean:[2,13],merg:13,messag:20,metadata:[4,5,8,13],might:20,mime:8,mine:[11,13,21],miner:[1,4,6,13,15,17,19,20,22,26],miner_dbus_interfac:[19,26],miner_dbus_name_prefix:[19,26],miner_dbus_path_prefix:[19,26],miner_error_domain:[19,26],miner_f:13,miner_f_:13,miner_fs_error_init:[20,26],miner_onlin:15,minerclass:[0,5,11,14,16,26],minererror:[20,26],minerf:[1,9,11,20,22,26],minerfsclass:[0,13,26],minerfserror:[20,26],minerfseventtyp:[13,20,26],mineronlin:[1,11,22,26],mineronlineclass:[0,15,26],minerproxi:[1,22,26],minerproxyclass:[0,17,26],mix:[9,24],mobil:24,modifi:13,monitor:[21,26],more:[2,13],most:[9,21],mount:[7,21],move:[13,20,26],move_fil:[13,14],mtime:21,much:11,multipl:11,must:[2,9,13,14,20],name:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],name_miss:[20,26],name_unavail:[20,26],namespac:2,necessari:13,need:[4,11,13],nepomuk:24,network:[15,20],networktyp:[15,20,26],neutral:24,never:9,new_with_root:[9,26],newli:[9,13],next:[2,4,13,20,26],next_finish:[4,20,26],nfo:[4,20],nie:4,nmo:20,no_stat:[21,26],node:9,non:[9,13],none:[2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,20,21,26],normal:9,note:[9,20],notifi:[9,13],notify_finish:[13,26],notify_upd:[9,26],number:[4,11,13],numer:2,object:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22],objectclass:[4,6,9,10,11,12,13,15,17,18],obtain:13,occur:8,one:[9,13],onli:[9,11,13,20],ontolog:24,oper:[2,11,13,19],optim:21,option:[2,9],order:[2,11,14],org:[8,19,24],other:[2,4,9,13,20,21,24],otherwis:[9,13],our:13,out:20,outstand:2,over:[20,21],overridden:16,own:9,owner:2,ownership:8,packag:24,pad:[3,5,7,10,12,14,16,18],paramet:[2,4,6,8,9,11,13,15,17],parent:[3,5,7,9,10,12,13,14,24],parent_class:[5,7,10,12,16,18],parent_directori:[20,26],parent_inst:[4,6,9,11,15,17],parent_is_index:[9,26],part:13,partial:2,particular:[2,13],pass:[2,4,8,13],passiv:4,past:4,path:[9,17,19],paus:[4,11,12,20,26],paused_alreadi:[20,26],pend:[2,13],per:[4,9],perform:[2,13],plain:8,point:[7,9,13],polici:[9,20],pool:13,popul:13,possibl:[2,9,20],precis:2,prefer:9,prefix:[9,19],prepend:6,prepend_fil:[6,26],prepend_id:[4,26],presenc:20,preserv:[21,26],previou:20,previous:[9,11],prioriti:[2,4,13,21,26],priority_default:2,priority_rdf_typ:4,priv:[4,6,9],process:[4,6,11,13,20],process_fil:[13,14],process_file_attribut:[13,14],processing_pool_ready_limit:13,processing_pool_wait_limit:13,progress:[11,12],project:24,prop:[4,9,11,13,17],prototyp:14,provid:[2,4,13,20,24],python:26,queri:[2,9,24],query_urn:[13,26],queu:[4,13,21],queue:[4,13,21],rais:[2,4,17],rdf:[4,24],rdf_type:4,reach:8,reaction:13,read:2,readabl:[4,9,11,13,17],readi:13,reamain:11,reason:[11,13,20],receiv:[4,9,11,13,15],recurs:[9,13,21,26],ref:[8,9,26],refer:8,referenc:9,relat:[13,24],relev:13,remain:11,remaining_tim:11,remov:[7,9,13,21,26],remove_children:[13,14],remove_fil:[13,14],report:[2,19],repositori:24,repres:[9,13],request:[2,9,20],requir:15,reserv:[5,7,10,12,14,16],resourc:[4,7,8,9,13],result:[2,4,13],resum:[11,12,15,20,26],retriev:[8,13],right:11,root:[9,13],run:20,run_last:[4,9,11,13,15],safe:13,same:[2,4,8,9,11,20],satisfi:2,scheme:9,search:24,second:[11,13],see:[2,4,9,11,13],self:[8,9,11,13,15],semant:24,separ:2,server:21,set:[2,8,9],set_default_polici:[9,26],set_filter_hidden:[9,26],set_priority_rdf_typ:[4,26],set_throttl:[13,26],setup:21,share:24,should:[2,4,8,9,13,15,20,21],show:19,signal:20,sinc:13,singl:13,size:4,skip:20,slowest:13,some:[9,13],sometim:9,somewher:21,sooner:4,sourc:[4,13],source_fil:13,sparql:[8,13,24],specif:[5,9,15,20],specifi:2,speed:13,stai:13,standard:[2,4,24],start:[2,11,12,13,26],stat:21,statement:13,statu:[11,20],still:13,stop:[11,12,26],storag:24,store:[4,13,24],str:[2,4,8,9,11,13,17],string:[2,4,8,9,11,13],struct:[4,6,9,11,13,15,17],structur:[2,4,6,9,11,13,15,17,24],style:9,subclass:[4,6,9,11,13,15,17,20],succeed:2,success:[4,8,13,15],sum:13,suppli:13,sure:21,symbol:24,sync:2,synchron:13,system:[9,21],take:[4,5,7,8,9],talk:5,task:[4,8,13],technic:9,tell:[11,13],text:8,than:[4,13],themselv:13,thi:[2,4,7,8,9,11,13,15,17,19,20,21],thing:20,those:[9,13],throttl:13,through:[9,11],time:[4,11,13,20],tmp:8,too:9,tool:24,top:[9,13],topmost:13,tracker1:19,tracker:[2,4,5,6,8,13,19,20,24],tracker_data_provider_begin:26,tracker_data_provider_begin_async:26,tracker_data_provider_begin_finish:26,tracker_decorator_delete_id:26,tracker_decorator_error_empti:26,tracker_decorator_error_paus:26,tracker_decorator_error_quark:26,tracker_decorator_fs_prepend_fil:26,tracker_decorator_get_class_nam:26,tracker_decorator_get_data_sourc:26,tracker_decorator_get_n_item:26,tracker_decorator_info_complet:26,tracker_decorator_info_complete_error:26,tracker_decorator_info_get_mimetyp:26,tracker_decorator_info_get_task:26,tracker_decorator_info_get_url:26,tracker_decorator_info_get_urn:26,tracker_decorator_info_ref:26,tracker_decorator_info_unref:26,tracker_decorator_next:26,tracker_decorator_next_finish:26,tracker_decorator_prepend_id:26,tracker_decorator_set_priority_rdf_typ:26,tracker_directory_flag_check_delet:26,tracker_directory_flag_check_mtim:26,tracker_directory_flag_ignor:26,tracker_directory_flag_monitor:26,tracker_directory_flag_no_stat:26,tracker_directory_flag_non:26,tracker_directory_flag_preserv:26,tracker_directory_flag_prior:26,tracker_directory_flag_recurs:26,tracker_filter_directori:26,tracker_filter_fil:26,tracker_filter_parent_directori:26,tracker_filter_policy_accept:26,tracker_filter_policy_deni:26,tracker_indexing_tree_add:26,tracker_indexing_tree_add_filt:26,tracker_indexing_tree_clear_filt:26,tracker_indexing_tree_file_is_index:26,tracker_indexing_tree_file_is_root:26,tracker_indexing_tree_file_matches_filt:26,tracker_indexing_tree_get_default_polici:26,tracker_indexing_tree_get_filter_hidden:26,tracker_indexing_tree_get_master_root:26,tracker_indexing_tree_get_root:26,tracker_indexing_tree_list_root:26,tracker_indexing_tree_new:26,tracker_indexing_tree_new_with_root:26,tracker_indexing_tree_notify_upd:26,tracker_indexing_tree_parent_is_index:26,tracker_indexing_tree_remov:26,tracker_indexing_tree_set_default_polici:26,tracker_indexing_tree_set_filter_hidden:26,tracker_miner_dbus_interfac:26,tracker_miner_dbus_name_prefix:26,tracker_miner_dbus_path_prefix:26,tracker_miner_error_domain:26,tracker_miner_error_invalid_cooki:26,tracker_miner_error_name_miss:26,tracker_miner_error_name_unavail:26,tracker_miner_error_paus:26,tracker_miner_error_paused_alreadi:26,tracker_miner_error_quark:26,tracker_miner_fs_check_fil:26,tracker_miner_fs_error_init:26,tracker_miner_fs_error_quark:26,tracker_miner_fs_event_cr:26,tracker_miner_fs_event_delet:26,tracker_miner_fs_event_mov:26,tracker_miner_fs_event_upd:26,tracker_miner_fs_get_data_provid:26,tracker_miner_fs_get_indexing_tre:26,tracker_miner_fs_get_throttl:26,tracker_miner_fs_get_urn:26,tracker_miner_fs_has_items_to_process:26,tracker_miner_fs_notify_finish:26,tracker_miner_fs_query_urn:26,tracker_miner_fs_set_throttl:26,tracker_miner_get_connect:26,tracker_miner_is_paus:26,tracker_miner_is_start:26,tracker_miner_online_get_network_typ:26,tracker_miner_paus:26,tracker_miner_proxy_new:26,tracker_miner_resum:26,tracker_miner_start:26,tracker_miner_stop:26,tracker_network_type_3g:26,tracker_network_type_edg:26,tracker_network_type_gpr:26,tracker_network_type_lan:26,tracker_network_type_non:26,tracker_network_type_unknown:26,trackerdataprovid:26,trackerdataproviderifac:26,trackerdecor:26,trackerdecoratorclass:26,trackerdecoratorerror:26,trackerdecoratorf:26,trackerdecoratorfsclass:26,trackerdecoratorinfo:26,trackerdirectoryflag:26,trackerfilterpolici:26,trackerfiltertyp:26,trackerindexingtre:26,trackerindexingtreeclass:26,trackermin:[0,1,19,20,21,22,23,25,26,27],trackerminerclass:26,trackerminererror:26,trackerminerf:26,trackerminerfsclass:26,trackerminerfserror:26,trackerminerfseventtyp:26,trackerminermanag:11,trackermineronlin:26,trackermineronlineclass:26,trackerminerproxi:26,trackerminerproxyclass:26,trackernetworktyp:26,trackersparqlbuild:[8,13],translat:11,tree:[9,13],trigger:9,tripl:13,two:24,txt:8,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20],typeinterfac:3,typic:[9,13],umt:20,unavail:26,under:19,uniform:8,uniqu:[4,8],unknown:[9,20,26],unless:21,unrecognis:20,unref:[2,4,8,26],updat:[4,9,13,20,24,26],upon:15,upper:13,uri:[2,13],url:[2,8,9],urn:[8,13],use:[4,19,20,21],used:[4,9,11,13,20,21],useful:4,user:[2,9,24],user_data:[2,4],uses:[15,24],using:[8,9,19,24],usual:[9,13,21],valu:[2,4,9,11,13,15,17,20,21],version:[2,4,6,8,9,11,13,15,16,19,20],virtual:[3,12,16],vmethod:13,w3c:24,wai:8,wait:[4,13],well:13,were:11,what:13,when:[2,4,8,9,11,13,15,20,21],whenev:[4,11,13],where:[9,13,20,21],whether:[9,13,15],which:[4,9,11,13,15,20,24],white:9,who:4,wifi:20,wiki:[8,24],wikipedia:8,wildcard:2,within:9,won:2,work:20,would:[4,8,9,19,20],writabl:[4,9,11,13,17],written:[13,19],yet:13,you:9},titles:["Class Structures","Classes","TrackerMiner.DataProvider","TrackerMiner.DataProviderIface","TrackerMiner.Decorator","TrackerMiner.DecoratorClass","TrackerMiner.DecoratorFS","TrackerMiner.DecoratorFSClass","TrackerMiner.DecoratorInfo","TrackerMiner.IndexingTree","TrackerMiner.IndexingTreeClass","TrackerMiner.Miner","TrackerMiner.MinerClass","TrackerMiner.MinerFS","TrackerMiner.MinerFSClass","TrackerMiner.MinerOnline","TrackerMiner.MinerOnlineClass","TrackerMiner.MinerProxy","TrackerMiner.MinerProxyClass","Constants","Enums","Flags","Hierarchy","Interface Structures","TrackerMiner 2.0 (2.3.6)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,4,6,9,11,13,15,17],"enum":20,api:24,constant:19,dataprovid:2,dataproviderifac:3,decor:4,decoratorclass:5,decoratorf:6,decoratorfsclass:7,decoratorinfo:8,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],flag:21,hierarchi:22,indexingtre:9,indexingtreeclass:10,interfac:[23,25],map:26,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],miner:11,minerclass:12,minerf:13,minerfsclass:14,mineronlin:15,mineronlineclass:16,minerproxi:17,minerproxyclass:18,properti:[2,4,6,9,11,13,15,17],signal:[2,4,6,9,11,13,15,17],structur:[0,23,27],symbol:26,trackermin:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24],virtual:[2,4,6,9,11,13,15,17]}})