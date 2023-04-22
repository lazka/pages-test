Search.setIndex({docnames:["callbacks","class-structs","classes","classes/Builder","classes/BuilderClass","classes/BuilderFixup","classes/BuilderFixupClass","classes/BuilderNode","classes/BuilderNodeClass","classes/BuilderSource","classes/BuilderSourceClass","classes/BuilderSourceCtx","classes/BuilderSourceCtxClass","classes/Machine","classes/MachineClass","classes/Node","classes/NodeClass","classes/Opcode","classes/Query","classes/QueryClass","classes/Silo","classes/SiloClass","classes/Stack","enums","flags","functions","hierarchy","index","mapping","structs"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:55},filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/Builder.rst","classes/BuilderClass.rst","classes/BuilderFixup.rst","classes/BuilderFixupClass.rst","classes/BuilderNode.rst","classes/BuilderNodeClass.rst","classes/BuilderSource.rst","classes/BuilderSourceClass.rst","classes/BuilderSourceCtx.rst","classes/BuilderSourceCtxClass.rst","classes/Machine.rst","classes/MachineClass.rst","classes/Node.rst","classes/NodeClass.rst","classes/Opcode.rst","classes/Query.rst","classes/QueryClass.rst","classes/Silo.rst","classes/SiloClass.rst","classes/Stack.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst","structs.rst"],objects:{"Xmlb.Builder":{"new":[3,2,1,""],add_fixup:[3,1,1,""],add_locale:[3,1,1,""],append_guid:[3,1,1,""],compile:[3,1,1,""],ensure:[3,1,1,""],import_node:[3,1,1,""],import_source:[3,1,1,""],set_profile_flags:[3,1,1,""]},"Xmlb.BuilderCompileFlags":{IGNORE_GUID:[24,3,1,""],IGNORE_INVALID:[24,3,1,""],NATIVE_LANGS:[24,3,1,""],NONE:[24,3,1,""],SINGLE_LANG:[24,3,1,""],WATCH_BLOB:[24,3,1,""]},"Xmlb.BuilderFixup":{"new":[5,2,1,""],get_max_depth:[5,1,1,""],set_max_depth:[5,1,1,""]},"Xmlb.BuilderNode":{"export":[7,1,1,""],"new":[7,2,1,""],add_child:[7,1,1,""],add_flag:[7,1,1,""],depth:[7,1,1,""],get_attr:[7,1,1,""],get_attr_as_uint:[7,1,1,""],get_child:[7,1,1,""],get_children:[7,1,1,""],get_element:[7,1,1,""],get_first_child:[7,1,1,""],get_last_child:[7,1,1,""],get_parent:[7,1,1,""],get_tail:[7,1,1,""],get_text:[7,1,1,""],get_text_as_uint:[7,1,1,""],has_flag:[7,1,1,""],remove_attr:[7,1,1,""],remove_child:[7,1,1,""],set_attr:[7,1,1,""],set_element:[7,1,1,""],set_tail:[7,1,1,""],set_text:[7,1,1,""],sort_children:[7,1,1,""],traverse:[7,1,1,""],unlink:[7,1,1,""]},"Xmlb.BuilderNodeFlags":{HAS_TAIL:[24,3,1,""],HAS_TEXT:[24,3,1,""],IGNORE:[24,3,1,""],LITERAL_TEXT:[24,3,1,""],NONE:[24,3,1,""]},"Xmlb.BuilderSource":{"new":[9,2,1,""],add_fixup:[9,1,1,""],add_node_func:[9,1,1,""],load_bytes:[9,1,1,""],load_file:[9,1,1,""],load_xml:[9,1,1,""],set_info:[9,1,1,""],set_prefix:[9,1,1,""]},"Xmlb.BuilderSourceCtx":{get_bytes:[11,1,1,""],get_filename:[11,1,1,""],get_stream:[11,1,1,""]},"Xmlb.BuilderSourceFlags":{LITERAL_TEXT:[24,3,1,""],NONE:[24,3,1,""],WATCH_FILE:[24,3,1,""]},"Xmlb.Machine":{"new":[13,2,1,""],add_method:[13,1,1,""],add_opcode_fixup:[13,1,1,""],add_operator:[13,1,1,""],add_text_handler:[13,1,1,""],get_stack_size:[13,1,1,""],opcode_func_new:[13,1,1,""],opcode_to_string:[13,1,1,""],opcodes_to_string:[13,1,1,""],parse:[13,1,1,""],parse_full:[13,1,1,""],run:[13,1,1,""],set_debug_flags:[13,1,1,""],set_stack_size:[13,1,1,""],stack_pop:[13,1,1,""],stack_push:[13,1,1,""],stack_push_integer:[13,1,1,""],stack_push_steal:[13,1,1,""],stack_push_text:[13,1,1,""],stack_push_text_static:[13,1,1,""],stack_push_text_steal:[13,1,1,""]},"Xmlb.MachineDebugFlags":{NONE:[24,3,1,""],SHOW_OPTIMIZER:[24,3,1,""],SHOW_PARSING:[24,3,1,""],SHOW_STACK:[24,3,1,""]},"Xmlb.MachineParseFlags":{NONE:[24,3,1,""],OPTIMIZE:[24,3,1,""]},"Xmlb.Node":{"export":[15,1,1,""],get_attr:[15,1,1,""],get_attr_as_uint:[15,1,1,""],get_child:[15,1,1,""],get_children:[15,1,1,""],get_data:[15,1,1,""],get_depth:[15,1,1,""],get_element:[15,1,1,""],get_next:[15,1,1,""],get_parent:[15,1,1,""],get_root:[15,1,1,""],get_tail:[15,1,1,""],get_text:[15,1,1,""],get_text_as_uint:[15,1,1,""],query:[15,1,1,""],query_attr:[15,1,1,""],query_attr_as_uint:[15,1,1,""],query_export:[15,1,1,""],query_first:[15,1,1,""],query_first_full:[15,1,1,""],query_full:[15,1,1,""],query_text:[15,1,1,""],query_text_as_uint:[15,1,1,""],set_data:[15,1,1,""],transmogrify:[15,1,1,""]},"Xmlb.NodeExportFlags":{ADD_HEADER:[24,3,1,""],FORMAT_INDENT:[24,3,1,""],FORMAT_MULTILINE:[24,3,1,""],INCLUDE_SIBLINGS:[24,3,1,""],NONE:[24,3,1,""],ONLY_CHILDREN:[24,3,1,""]},"Xmlb.Opcode":{cmp_str:[17,1,1,""],cmp_val:[17,1,1,""],func_new:[17,2,1,""],get_kind:[17,1,1,""],get_str:[17,1,1,""],get_val:[17,1,1,""],integer_new:[17,2,1,""],kind_from_string:[17,2,1,""],kind_to_string:[17,2,1,""],ref:[17,1,1,""],text_new:[17,2,1,""],text_new_static:[17,2,1,""],text_new_steal:[17,2,1,""],to_string:[17,1,1,""],unref:[17,1,1,""]},"Xmlb.OpcodeFlags":{BOOLEAN:[24,3,1,""],BOUND:[24,3,1,""],FUNCTION:[24,3,1,""],INTEGER:[24,3,1,""],TEXT:[24,3,1,""],UNKNOWN:[24,3,1,""]},"Xmlb.OpcodeKind":{BOOLEAN:[23,3,1,""],BOUND_INTEGER:[23,3,1,""],BOUND_TEXT:[23,3,1,""],BOUND_UNSET:[23,3,1,""],FUNCTION:[23,3,1,""],INDEXED_TEXT:[23,3,1,""],INTEGER:[23,3,1,""],TEXT:[23,3,1,""],UNKNOWN:[23,3,1,""]},"Xmlb.Query":{"new":[18,2,1,""],bind_str:[18,1,1,""],bind_val:[18,1,1,""],get_flags:[18,1,1,""],get_limit:[18,1,1,""],get_xpath:[18,1,1,""],new_full:[18,2,1,""],set_flags:[18,1,1,""],set_limit:[18,1,1,""]},"Xmlb.QueryFlags":{NONE:[24,3,1,""],OPTIMIZE:[24,3,1,""],REVERSE:[24,3,1,""],USE_INDEXES:[24,3,1,""]},"Xmlb.Silo":{"export":[20,1,1,""],"new":[20,2,1,""],export_file:[20,1,1,""],get_bytes:[20,1,1,""],get_guid:[20,1,1,""],get_profile_string:[20,1,1,""],get_root:[20,1,1,""],get_size:[20,1,1,""],invalidate:[20,1,1,""],is_valid:[20,1,1,""],load_from_bytes:[20,1,1,""],load_from_file:[20,1,1,""],new_from_xml:[20,2,1,""],query:[20,1,1,""],query_build_index:[20,1,1,""],query_first:[20,1,1,""],query_first_full:[20,1,1,""],query_full:[20,1,1,""],save_to_file:[20,1,1,""],set_profile_flags:[20,1,1,""],to_string:[20,1,1,""],watch_file:[20,1,1,""]},"Xmlb.Silo.props":{guid:[20,5,1,""],valid:[20,5,1,""]},"Xmlb.SiloLoadFlags":{NONE:[24,3,1,""],NO_MAGIC:[24,3,1,""],WATCH_BLOB:[24,3,1,""]},"Xmlb.SiloProfileFlags":{APPEND:[24,3,1,""],DEBUG:[24,3,1,""],NONE:[24,3,1,""],XPATH:[24,3,1,""]},"Xmlb.Stack":{pop:[22,1,1,""],push:[22,1,1,""],push_steal:[22,1,1,""],to_string:[22,1,1,""]},Xmlb:{Builder:[3,0,1,""],BuilderClass:[4,0,1,""],BuilderCompileFlags:[24,0,1,""],BuilderFixup:[5,0,1,""],BuilderFixupClass:[6,0,1,""],BuilderFixupFunc:[0,4,1,""],BuilderNode:[7,0,1,""],BuilderNodeClass:[8,0,1,""],BuilderNodeFlags:[24,0,1,""],BuilderNodeSortFunc:[0,4,1,""],BuilderNodeTraverseFunc:[0,4,1,""],BuilderSource:[9,0,1,""],BuilderSourceClass:[10,0,1,""],BuilderSourceCtx:[11,0,1,""],BuilderSourceCtxClass:[12,0,1,""],BuilderSourceFlags:[24,0,1,""],BuilderSourceNodeFunc:[0,4,1,""],Machine:[13,0,1,""],MachineClass:[14,0,1,""],MachineDebugFlags:[24,0,1,""],MachineMethodFunc:[0,4,1,""],MachineOpcodeFixupFunc:[0,4,1,""],MachineParseFlags:[24,0,1,""],MachineTextHandlerFunc:[0,4,1,""],Node:[15,0,1,""],NodeClass:[16,0,1,""],NodeExportFlags:[24,0,1,""],NodeTransmogrifyFunc:[0,4,1,""],Opcode:[17,0,1,""],OpcodeFlags:[24,0,1,""],OpcodeKind:[23,0,1,""],Query:[18,0,1,""],QueryClass:[19,0,1,""],QueryFlags:[24,0,1,""],Silo:[20,0,1,""],SiloClass:[21,0,1,""],SiloLoadFlags:[24,0,1,""],SiloProfileFlags:[24,0,1,""],Stack:[22,0,1,""],opcode_kind_from_string:[25,4,1,""],opcode_kind_to_string:[25,4,1,""],string_escape:[25,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","data","Python data"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:attribute","4":"py:function","5":"py:data"},terms:{"abstract":[3,5,7,9,11,13,15,18,20],"boolean":[23,24,28],"byte":[9,11,15,20],"class":[4,6,8,10,12,14,16,17,19,21,22,23,24,27],"default":[13,18,20],"enum":27,"export":[7,15,20,24,28],"final":17,"function":[3,5,7,9,13,15,17,20,23,24,27,28],"import":20,"int":[0,5,7,13,15,17,18,20],"new":[3,5,7,9,11,13,15,17,18,20,22,25,28],"return":[0,3,5,7,9,11,13,15,17,18,20,22,25,27],"short":20,"static":[13,17],"true":[7,9,15,17,18,20,22],Not:13,The:[7,13,15,17,18,20,24,27],Use:[5,24],abe:[15,20],access:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21],actual:27,add:[3,7,9,13,20,24],add_child:[7,28],add_fixup:[3,9,28],add_flag:[7,28],add_head:[24,28],add_local:[3,28],add_method:[13,28],add_node_func:[9,28],add_opcode_fixup:[13,28],add_oper:[13,28],add_text_handl:[13,28],added:[3,9,13],addit:24,affect:13,after:[3,13],all:[3,5,7,13,15,18,20,27],alloc:27,allow:[13,15,27],almost:27,alreadi:24,amount:24,ani:[3,7,9,15],anoth:3,app:25,append:[20,24,28],append_guid:[3,28],applic:27,appstreamupgrad:[5,9],argument:17,arrai:15,assign:[18,24],assum:24,attempt:24,attr:20,attribut:[7,13,15,20],back:[15,20],base:[3,5,7,9,11,13,15,18,20,23,24],basenam:11,been:[3,15,20,24],befor:13,begin:9,behaviour:24,being:[3,5,11],binari:27,bind_str:[18,28],bind_val:[18,28],bitmask:24,blob:20,bn1:0,bn2:0,bool:[0,7,9,13,15,17,18,20,22],bound:[18,23,24,28],bound_integ:[23,28],bound_text:[23,28],bound_unset:[23,28],build:[9,24],builder:[2,7,9,26,28],builderclass:[1,3,28],buildercompileflag:[3,24,28],builderfixup:[0,2,3,9,26,28],builderfixupclass:[1,5,28],builderfixupfunc:[0,5,28],buildernod:[0,2,3,5,9,26,28],buildernodeclass:[1,7,28],buildernodeflag:[7,24,28],buildernodesortfunc:[0,7,28],buildernodetraversefunc:[0,7,15,28],buildersourc:[0,2,3,26,28],buildersourceclass:[1,9,28],buildersourcectx:[2,26,28],buildersourcectxclass:[1,11,28],buildersourceflag:[3,9,24,28],buildersourcenodefunc:[0,9,28],built:13,cach:24,call:[7,13,15,17,20],callback:[5,9,13,27],can:[7,13,15,17,24],cancel:[3,9,11,20],carefulli:24,cdata:24,chang:[20,24],check:[7,17,20,24],child:[7,15,24],children:[7,15,24],chosen:24,classmethod:[3,5,7,9,13,17,18,20],cmp_str:[17,28],cmp_val:[17,28],collect:[3,20],com:27,common:[9,13],compar:[17,24],compil:[3,5,9,28],complet:15,compon:[7,15,20],compress:9,consider:5,construct:20,consum:22,contain:13,control:[24,25],convert:[15,17,20,24,25,27],copi:[13,17,27],correct:3,count:17,creat:[3,5,7,9,13,15,17,18,20],current:[7,11,15],custom:[7,13,17],data:[3,7,9,11,13,15,20,24,27],date:3,debian:27,debug:[3,13,20,24,28],decrement:17,dedupl:27,deepli:5,depend:27,depth:[5,7,15,24,28],descript:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,27],desktop:[7,15,20],differ:[13,15,20],directori:20,disabl:[3,20],document:27,done:[24,27],drop:17,each:[5,7,15],either:17,element:[7,15],empti:20,en_u:3,enabl:[3,20],encod:13,end:22,ensur:[3,28],entir:[7,27],equal:24,error:[3,7,9,11,13,15,18,20,24],escap:25,even:15,ever:20,everi:[3,5,9],exampl:13,exec_data:[0,13],exist:[7,18],explicit:13,export_fil:[20,28],extra:24,fals:20,featur:13,file:[3,5,9,11,20,24,27],filenam:[3,11],find:7,first:[3,7,15],fixup:[3,5,9,13],fixup_cb:13,flag:[3,7,9,13,15,18,20,27],format_ind:[24,28],format_multilin:[24,28],forward:25,found:[7,15],free:17,from:[7,13,15,20],func:[5,7,9,15,17,25],func_nam:13,func_new:[17,28],func_tail:15,func_text:15,futur:20,fwupd:15,g_maxuint64:15,gener:24,get:[3,5,7,9,13,15,17,18,20],get_attr:[7,15,28],get_attr_as_uint:[7,15,28],get_byt:[11,20,28],get_child:[7,15,28],get_children:[7,15,28],get_data:[15,28],get_depth:[15,28],get_el:[7,15,28],get_filenam:[11,28],get_first_child:[7,28],get_flag:[18,28],get_guid:[20,28],get_kind:[17,28],get_last_child:[7,28],get_limit:[18,28],get_max_depth:[5,28],get_next:[15,28],get_par:[7,15,28],get_profile_str:[20,28],get_root:[15,20,28],get_siz:[20,28],get_stack_s:[13,28],get_str:[17,28],get_stream:[11,28],get_tail:[7,15,28],get_text:[7,15,28],get_text_as_uint:[7,15,28],get_val:[17,28],get_xpath:[18,28],ghex:25,gimp:7,gio:[3,9,11,20,27],gir1:27,github:27,given:[7,15],glib:[3,7,9,11,13,15,17,18,20,23,24],gnome:25,gobject:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,26,27],guid:[3,20,24],guint64:15,halt:[7,15],handl:0,handler:13,handler_cb:13,has:[15,20,24],has_flag:[7,28],has_tail:[24,28],has_text:[24,28],hash:3,have:[3,13,20,24,27],header:24,hierarchi:27,homepag:27,how:24,http:27,hughsi:27,identifi:20,idx:18,ignor:[7,24,28],ignore_guid:[24,28],ignore_invalid:[3,24,28],immedi:3,import_nod:[3,28],import_sourc:[3,28],includ:[24,27],include_s:[24,28],increas:5,increment:17,indent:24,index:[17,18,20,23,24],indexed_text:[23,28],info:9,inform:9,inherit:[3,5,7,9,11,13,15,18,20],input:11,inputstream:11,instal:9,instanc:[13,15,17],instead:[7,13],integ:[5,7,13,15,17,18,20,23,24,28],integer_new:[17,28],intern:[3,17,20],invalid:[3,20,24,28],is_valid:[20,28],iself:15,itself:20,job:13,kei:15,kind:[17,25],kind_from_str:[17,28],kind_to_str:[17,28],know:24,kwarg:[3,5,7,9,11,13,15,18,20],languag:24,larg:5,last:7,later:[3,24],lead:24,length:[7,13],level:13,librari:27,libxmlb:27,lifecycl:17,like:[13,15],limit:[7,15,18,20],liter:[13,17,23],literal_text:[3,9,24,28],load:[9,20,24],load_byt:[9,28],load_fil:[9,28],load_from_byt:[20,28],load_from_fil:[20,28],load_xml:[9,28],local:3,locat:20,machin:[0,2,17,26,28],machineclass:[1,13,28],machinedebugflag:[13,24,28],machinemethodfunc:[0,13,28],machineopcodefixupfunc:[0,13,28],machineparseflag:[13,24,28],machinetexthandlerfunc:[0,13,28],mai:[5,13,17,18],make:9,manual:[13,18],map:27,markdown:15,max_depth:[5,7],maximum:[5,7,13,15,20],memori:20,metadata:9,method_cb:13,might:20,minimum:13,miss:13,mmap:[20,27],mnemon:13,modifi:20,monitor:20,more:20,multipl:18,n_opcod:13,name:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21],nativ:24,native_lang:[24,28],need:13,nest:5,never:20,new_from_xml:[20,28],new_ful:[18,28],newlin:[24,25],next:15,no_mag:[24,28],node:[0,2,3,5,7,9,20,24,26,28],nodeclass:[1,15,28],nodeexportflag:[7,15,20,24,28],nodetransmogrifyfunc:[0,15,28],none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,28],nonstandard:13,note:[15,20],nul:[7,13,27],number:[13,15,20],obj:[7,17],object:[0,3,5,7,9,11,13,15,17,18,20,26],objectclass:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21],off:22,onc:17,one:[13,15,20],onli:[5,15,20,24],only_children:[24,28],onto:22,opcod:[0,13,22,23,24,25,28,29],opcode_func_new:[13,17,28],opcode_kind_from_str:[25,28],opcode_kind_to_str:[25,28],opcode_to_str:[13,28],opcodeflag:[24,28],opcodekind:[17,23,25,28],opcodes_sig:13,opcodes_to_str:[13,28],oper:[13,23,24],optim:[13,24,28],option:[7,9],order:[7,24],org:25,origin:17,other:13,otherwis:[7,20],outliv:17,output:24,over:3,packag:27,pangomarkup:15,paramet:[0,3,5,7,9,11,13,15,17,18,20,22,24,25],parent:[7,9,15,27],parent_class:[4,6,8,10,12,14,16,19,21],parent_inst:[3,5,7,9,11,13,15,18,20],pars:[13,24,27,28],parse_ful:[13,28],pass:[5,7,9,13,15,24],per:13,perform:5,pleas:[15,20],point:[7,15],pointer:[5,7,9,13,15],pop:[13,22,28],possibl:24,pre_ord:7,predic:[13,24],prefix:9,prepar:15,prioriti:7,prioritis:3,process:11,profil:[3,20,24],profile_flag:[3,20],project:27,prop:20,push:[22,28],push_steal:[22,28],python:28,queri:[2,3,15,20,24,25,26,27,28],query_attr:[15,28],query_attr_as_uint:[15,28],query_build_index:[20,28],query_export:[15,28],query_first:[15,20,28],query_first_ful:[15,20,28],query_ful:[15,20,28],query_text:[15,28],query_text_as_uint:[15,28],queryclass:[1,18,28],queryflag:[18,24,28],quicker:18,rais:[3,7,9,11,13,15,18,20],readabl:20,realli:20,reason:20,ref:[17,28],refcount:17,refer:[13,17],regist:[13,17],remoteid:15,remov:[7,24],remove_attr:[7,28],remove_child:[7,28],repair:24,repres:[13,17,22],represent:[20,27],requir:13,resid:9,result:[7,13,15,18,20,24],result_unus:0,retriev:[15,17],revers:[24,28],root:[5,7,9,15,20],run:[3,5,9,13,24,28],safe:[13,15,20,25],save:[20,24],save_to_fil:[20,28],search:[15,20],self:[0,7,15,17],separ:7,sequenc:25,set:[5,7,9,13,15,18,20,24],set_attr:[7,28],set_data:[15,28],set_debug_flag:[13,28],set_el:[7,28],set_flag:[18,28],set_info:[9,28],set_limit:[18,28],set_max_depth:[5,28],set_prefix:[9,28],set_profile_flag:[3,20,28],set_stack_s:[13,28],set_tail:[7,28],set_text:[7,28],share:9,shorthand:13,should:[7,20],show:24,show_optim:[24,28],show_pars:[24,28],show_stack:[13,24,28],sibl:[15,24],signatur:[13,24],silo:[2,3,9,15,18,24,26,28],siloclass:[1,20,28],siloloadflag:[20,24,28],siloprofileflag:[3,20,24,28],simpl:24,singl:24,single_lang:[24,28],size:13,slash:25,some:[3,7,9,13,15,18,20,27],someth:15,sort:7,sort_children:[7,28],sourc:[3,9,15,24,27],specif:[13,15,17],specifi:18,split:24,stabl:25,stack:[0,13,24,28,29],stack_pop:[13,28],stack_push:[13,28],stack_push_integ:[13,28],stack_push_st:[13,28],stack_push_text:[13,28],stack_push_text_st:[13,28],stack_push_text_stat:[13,28],stack_siz:13,standard:13,start:[7,13,15],statu:13,steal:17,stolen:13,store:[17,22,24],str:[0,3,5,7,9,11,13,15,17,18,20,22,25],stream:11,string:[7,13,15,17,18,20,22,24,25,27],string_escap:[25,28],struct:[3,5,7,9,11,13,15,18,20],structur:[3,5,7,9,11,13,15,18,20,27],subclass:[3,5,7,9,11,13,15,18,20],subset:[15,20],success:[9,20],support:[13,15,20],symbol:27,tab:25,tabl:[17,27],tail:[7,15],tail_len:7,take:27,termin:[7,13],text:[0,3,5,7,9,13,15,17,20,22,23,24,25,28],text_len:[7,13],text_new:[17,28],text_new_st:[17,28],text_new_stat:[17,28],thi:[3,5,7,9,13,15,17,18,20,24,27],thread:[3,13,15,20],tied:17,time:18,tini:[15,20],to_str:[17,20,22,28],trail:24,transmogrif:15,transmogrifi:[15,28],travers:[7,15,28],traverseflag:7,traversetyp:7,tree:[3,7,15],two:7,typcic:3,type:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25],unavail:28,under:9,unfound:[15,20],unknown:[23,24,28],unlink:[7,28],unref:[17,28],unset:[5,7,11,15,17],url:7,use:[7,18,24,25],use_index:[18,24,28],used:[3,5,7,13,18,20,24],useful:20,user:[5,7,9,13,15],user_data:[0,5,7,9,13,15],using:[5,7,9,13,15,17,18,20,27],usual:20,val:[13,17,18],valid:[20,24],valu:[5,7,9,17,18,20,23,24],variabl:18,version:[3,5,7,9,11,13,15,17,18,20,22,25],visit:[5,7,15],watch:24,watch_blob:[24,28],watch_fil:[20,24,28],were:15,when:[17,20,24],where:[7,15,17,18,27],which:[15,22],whitespac:24,without:[24,27],writabl:20,x86_64:25,xb_builder_add_fixup:28,xb_builder_add_local:28,xb_builder_append_guid:28,xb_builder_compil:28,xb_builder_compile_flag_ignore_guid:28,xb_builder_compile_flag_ignore_invalid:28,xb_builder_compile_flag_native_lang:28,xb_builder_compile_flag_non:28,xb_builder_compile_flag_single_lang:28,xb_builder_compile_flag_watch_blob:28,xb_builder_ensur:28,xb_builder_fixup_get_max_depth:28,xb_builder_fixup_new:28,xb_builder_fixup_set_max_depth:28,xb_builder_import_nod:28,xb_builder_import_sourc:28,xb_builder_new:28,xb_builder_node_add_child:28,xb_builder_node_add_flag:28,xb_builder_node_depth:28,xb_builder_node_export:28,xb_builder_node_flag_has_tail:28,xb_builder_node_flag_has_text:28,xb_builder_node_flag_ignor:28,xb_builder_node_flag_literal_text:28,xb_builder_node_flag_non:28,xb_builder_node_get_attr:28,xb_builder_node_get_attr_as_uint:28,xb_builder_node_get_child:28,xb_builder_node_get_children:28,xb_builder_node_get_el:28,xb_builder_node_get_first_child:28,xb_builder_node_get_last_child:28,xb_builder_node_get_par:28,xb_builder_node_get_tail:28,xb_builder_node_get_text:28,xb_builder_node_get_text_as_uint:28,xb_builder_node_has_flag:28,xb_builder_node_insert:28,xb_builder_node_insert_text:28,xb_builder_node_new:28,xb_builder_node_remove_attr:28,xb_builder_node_remove_child:28,xb_builder_node_set_attr:28,xb_builder_node_set_el:28,xb_builder_node_set_tail:28,xb_builder_node_set_text:28,xb_builder_node_sort_children:28,xb_builder_node_travers:28,xb_builder_node_unlink:28,xb_builder_set_profile_flag:28,xb_builder_source_add_adapt:28,xb_builder_source_add_convert:28,xb_builder_source_add_fixup:28,xb_builder_source_add_node_func:28,xb_builder_source_add_simple_adapt:28,xb_builder_source_ctx_get_byt:28,xb_builder_source_ctx_get_filenam:28,xb_builder_source_ctx_get_stream:28,xb_builder_source_flag_literal_text:28,xb_builder_source_flag_non:28,xb_builder_source_flag_watch_fil:28,xb_builder_source_load_byt:28,xb_builder_source_load_fil:28,xb_builder_source_load_xml:28,xb_builder_source_new:28,xb_builder_source_set_info:28,xb_builder_source_set_prefix:28,xb_machine_add_func:17,xb_machine_add_method:28,xb_machine_add_opcode_fixup:28,xb_machine_add_oper:28,xb_machine_add_text_handl:28,xb_machine_debug_flag_non:28,xb_machine_debug_flag_show_optim:28,xb_machine_debug_flag_show_pars:28,xb_machine_debug_flag_show_stack:28,xb_machine_get_stack_s:28,xb_machine_new:28,xb_machine_opcode_func_new:28,xb_machine_opcode_to_str:28,xb_machine_opcodes_to_str:28,xb_machine_pars:28,xb_machine_parse_flag_non:28,xb_machine_parse_flag_optim:28,xb_machine_parse_ful:28,xb_machine_run:28,xb_machine_set_debug_flag:28,xb_machine_set_stack_s:28,xb_machine_stack_pop:28,xb_machine_stack_push:28,xb_machine_stack_push_integ:28,xb_machine_stack_push_st:28,xb_machine_stack_push_text:28,xb_machine_stack_push_text_st:28,xb_machine_stack_push_text_stat:28,xb_node_export:28,xb_node_export_flag_add_head:28,xb_node_export_flag_format_ind:28,xb_node_export_flag_format_multilin:28,xb_node_export_flag_include_s:28,xb_node_export_flag_non:28,xb_node_export_flag_only_children:28,xb_node_get_attr:28,xb_node_get_attr_as_uint:28,xb_node_get_child:28,xb_node_get_children:28,xb_node_get_data:28,xb_node_get_depth:28,xb_node_get_el:28,xb_node_get_next:28,xb_node_get_par:28,xb_node_get_root:28,xb_node_get_tail:28,xb_node_get_text:28,xb_node_get_text_as_uint:28,xb_node_queri:28,xb_node_query_attr:28,xb_node_query_attr_as_uint:28,xb_node_query_export:28,xb_node_query_first:28,xb_node_query_first_ful:28,xb_node_query_ful:28,xb_node_query_text:28,xb_node_query_text_as_uint:28,xb_node_set_data:28,xb_node_transmogrifi:28,xb_opcode_cmp_str:28,xb_opcode_cmp_v:28,xb_opcode_flag_boolean:28,xb_opcode_flag_bound:28,xb_opcode_flag_funct:28,xb_opcode_flag_integ:28,xb_opcode_flag_text:28,xb_opcode_flag_unknown:28,xb_opcode_func_new:28,xb_opcode_get_kind:28,xb_opcode_get_str:28,xb_opcode_get_v:28,xb_opcode_integer_new:28,xb_opcode_kind_boolean:28,xb_opcode_kind_bound_integ:28,xb_opcode_kind_bound_text:28,xb_opcode_kind_bound_unset:28,xb_opcode_kind_from_str:28,xb_opcode_kind_funct:28,xb_opcode_kind_indexed_text:28,xb_opcode_kind_integ:28,xb_opcode_kind_text:28,xb_opcode_kind_to_str:28,xb_opcode_kind_unknown:28,xb_opcode_ref:28,xb_opcode_text_new:28,xb_opcode_text_new_st:28,xb_opcode_text_new_stat:28,xb_opcode_to_str:28,xb_opcode_unref:28,xb_query_bind_str:28,xb_query_bind_v:28,xb_query_flag_non:28,xb_query_flag_optim:28,xb_query_flag_revers:28,xb_query_flag_use_index:28,xb_query_get_flag:28,xb_query_get_limit:28,xb_query_get_xpath:28,xb_query_new:28,xb_query_new_ful:28,xb_query_set_flag:28,xb_query_set_limit:28,xb_silo_export:28,xb_silo_export_fil:28,xb_silo_get_byt:28,xb_silo_get_guid:28,xb_silo_get_profile_str:28,xb_silo_get_root:28,xb_silo_get_s:28,xb_silo_invalid:28,xb_silo_is_valid:28,xb_silo_load_flag_no_mag:28,xb_silo_load_flag_non:28,xb_silo_load_flag_watch_blob:28,xb_silo_load_from_byt:28,xb_silo_load_from_fil:28,xb_silo_new:28,xb_silo_new_from_xml:28,xb_silo_profile_flag_append:28,xb_silo_profile_flag_debug:28,xb_silo_profile_flag_non:28,xb_silo_profile_flag_xpath:28,xb_silo_queri:28,xb_silo_query_build_index:28,xb_silo_query_first:28,xb_silo_query_first_ful:28,xb_silo_query_ful:28,xb_silo_save_to_fil:28,xb_silo_set_profile_flag:28,xb_silo_to_str:28,xb_silo_watch_fil:28,xb_stack_pop:28,xb_stack_push:28,xb_stack_push_st:28,xb_stack_to_str:28,xb_string_append_union:28,xb_string_escap:28,xbbuilder:28,xbbuilderclass:28,xbbuildercompileflag:28,xbbuilderfixup:28,xbbuilderfixupclass:28,xbbuilderfixupfunc:28,xbbuildernod:28,xbbuildernodeclass:28,xbbuildernodeflag:28,xbbuildernodesortfunc:28,xbbuildernodetraversefunc:28,xbbuildersourc:28,xbbuildersourceadapterfunc:28,xbbuildersourceclass:28,xbbuildersourceconverterfunc:28,xbbuildersourcectx:28,xbbuildersourcectxclass:28,xbbuildersourceflag:28,xbbuildersourcenodefunc:28,xbmachin:28,xbmachineclass:28,xbmachinedebugflag:28,xbmachinemethodfunc:28,xbmachineopcodefixupfunc:28,xbmachineparseflag:28,xbmachinetexthandlerfunc:28,xbnode:28,xbnodeclass:28,xbnodeexportflag:28,xbnodetransmogrifyfunc:28,xbopcod:28,xbopcodeflag:28,xbopcodekind:28,xbqueri:28,xbqueryclass:28,xbqueryflag:28,xbsilo:28,xbsiloclass:28,xbsiloloadflag:28,xbsiloprofileflag:28,xbstack:28,xml:[5,7,9,15,20,24,27],xmlb:[0,1,2,23,24,25,26,28,29],xpath:[9,13,15,18,20,24,25,27,28],xyx:13,you:[13,20],zero:[17,27]},titles:["Callbacks","Class Structures","Classes","Xmlb.Builder","Xmlb.BuilderClass","Xmlb.BuilderFixup","Xmlb.BuilderFixupClass","Xmlb.BuilderNode","Xmlb.BuilderNodeClass","Xmlb.BuilderSource","Xmlb.BuilderSourceClass","Xmlb.BuilderSourceCtx","Xmlb.BuilderSourceCtxClass","Xmlb.Machine","Xmlb.MachineClass","Xmlb.Node","Xmlb.NodeClass","Xmlb.Opcode","Xmlb.Query","Xmlb.QueryClass","Xmlb.Silo","Xmlb.SiloClass","Xmlb.Stack","Enums","Flags","Functions","Hierarchy","Xmlb 1.0 (0.1.15)","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,7,9,11,13,15,18,20],"enum":23,"function":25,api:27,builder:3,builderclass:4,builderfixup:5,builderfixupclass:6,buildernod:7,buildernodeclass:8,buildersourc:9,buildersourceclass:10,buildersourcectx:11,buildersourcectxclass:12,callback:0,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],flag:24,hierarchi:26,machin:13,machineclass:14,map:28,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],node:15,nodeclass:16,opcod:17,properti:[3,5,7,9,11,13,15,18,20],queri:18,queryclass:19,signal:[3,5,7,9,11,13,15,18,20],silo:20,siloclass:21,stack:22,structur:[1,29],symbol:28,virtual:[3,5,7,9,11,13,15,18,20],xmlb:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,27]}})