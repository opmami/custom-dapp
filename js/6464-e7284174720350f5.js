"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6464],{13201:function(e,a,r){r.d(a,{$:function(){return l},hu:function(){return b},ms:function(){return o}});var t=r(31549),s=r(44194),n=r(48483),c=r(24097),d=r(24279),i=r(25232);let l=()=>null,o=e=>(0,t.jsx)(n.c.DropdownIndicator,{...e,children:(0,t.jsx)(b,{})}),b=(0,d.ZP)(i.Z).withConfig({componentId:"sc-6a75ea15-0"})(["width:11px;",""],e=>(0,d.iv)(["transform:",";color:",";"],e.$flip?"rotate(180deg)":"none",e.theme.colors.selectedTheme.gray));a.ZP=function(e){let{variant:a,...r}=e,{colors:n,fonts:i}=(0,s.useContext)(d.Ni),o=(0,s.useMemo)(()=>({container:(e,a)=>({...e,opacity:a.isDisabled?.4:1}),singleValue:e=>({...e,color:n.selectedTheme.button.text.primary,boxShadow:"none",fontSize:"12px",border:"none",margin:0,maxWidth:"unset"}),control:(e,r)=>{var t;return{...e,color:n.selectedTheme.button.text.primary,cursor:"pointer",boxShadow:"none",border:"flat"===a?n.selectedTheme.border:"none",outline:"none",minHeight:"unset",height:null!==(t=r.selectProps.controlHeight)&&void 0!==t?t:"unset","&:hover":{background:"flat"===a||"transparent"===a?n.selectedTheme.button.fillHover:n.selectedTheme.button.hover},fontSize:"12px",background:"transparent"===a?"none":n.selectedTheme.newTheme.button.default.background,borderRadius:"transparent"===a?30:8}},menu:(e,a)=>({...e,background:n.selectedTheme.cell.fill,border:"none",outline:"none",borderRadius:8,boxShadow:n.selectedTheme.button.shadow,padding:0,width:a.selectProps.menuWidth,right:0}),menuList:e=>({...e,borderRadius:8,padding:0,textAlign:"left",border:n.selectedTheme.border,borderWidth:"1px",borderStyle:"solid",outline:"none","div.react-select__option:first-of-type:hover":{borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},"div.react-select__option:last-of-type:hover":{borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}}),option:(e,a)=>{var r;return{...e,border:"none",fontFamily:i.regular,color:a.isSelected?n.selectedTheme.newTheme.text.preview:n.selectedTheme.newTheme.text.secondary,cursor:"pointer",fontSize:"12px",backgroundColor:"transparent",padding:null!==(r=a.selectProps.optionPadding)&&void 0!==r?r:"8px",borderBottom:n.selectedTheme.border,"&:hover":{background:n.selectedTheme.cell.hover},":last-child":{borderBottom:"none"}}},placeholder:e=>({...e,fontSize:"12px",color:n.selectedTheme.button.text.primary}),dropdownIndicator:(e,a)=>({...e,transition:"transform 0.2s ease-in-out",transform:a.selectProps.menuIsOpen&&"rotate(180deg)"}),valueContainer:e=>({...e,height:"100%"})}),[n,i,a]);return(0,t.jsx)(c.ZP,{styles:o,classNamePrefix:"react-select",...r,components:{IndicatorSeparator:l,...r.components}})}},58122:function(e,a,r){r.d(a,{GU:function(){return S},NZ:function(){return T},Xy:function(){return g},_i:function(){return C},aD:function(){return v},aj:function(){return G}});var t=r(44194),s=r(66054),n=r(44565),c=r(72054),d=r(90007),i=r(12960),l=r(64027),o=r(39818),b=r(67956),k=r(14210),u=r(96774),p=r(15880),Z=r(99316),h=r(51221),m=r(15155),f=r(98944);let C=()=>{let e=(0,i.CG)(Z.Gt),a=(0,i.CG)(Z.Tv),r=(0,i.CG)(u.sm),s=(0,i.CG)(u.x_),d=(0,i.CG)(m.B8),l=(0,i.CG)(c.vl),b=(0,i.CG)(Z.k$),k=(0,i.CG)(c.QM),h=(0,i.CG)(Z.uX);(0,i.X4)(o.nc,{dependencies:[r],disabled:s}),(0,i.X4)(o.Ct,{dependencies:[r],disabled:s});let C=(0,t.useCallback)(()=>(0,p.oZ)({providers:[b]}),[b]);(0,i.X4)(C,{dependencies:[r,b],disabled:!r});let v=(0,t.useCallback)(()=>(0,p.wM)([b]),[b]);(0,i.X4)(v,{dependencies:[r,d,b],disabled:!r||!d});let g=(0,t.useCallback)(()=>(0,p.KC)([b]),[b]);(0,i.X4)(g,{dependencies:[r,d,b],disabled:!r||!d});let T=(0,t.useCallback)(()=>(0,p.i0)({providers:[b]}),[b]);(0,i.SK)("fetchGlobalTradeHistory",T,{dependencies:[b,h]}),(0,i.SK)("fetchPerpsV3GlobalLiquidations",n.ng,{dependencies:[b,k],disabled:b!==f.U4.SNX_V3_BASE});let S=(0,t.useCallback)(()=>(0,p.MK)([b]),[b]);(0,i.SK)("fetchMarketData",S,{dependencies:[b],intervalTime:6e4});let G=(0,t.useCallback)(()=>(0,p.Cz)([b]),[b]);(0,i.SK)("fetchActivePositions",G,{intervalTime:3e4,dependencies:[r,a.length],disabled:!r||!a.length});let x=(0,t.useCallback)(()=>(0,p.PT)([b]),[b]);(0,i.SK)("fetchAccountData",x,{intervalTime:3e4,dependencies:[a.length,l],disabled:!a.length});let _=(0,t.useCallback)(()=>(0,p.w5)([b]),[b]);(0,i.SK)("fetchFuturesPositionHistory",_,{intervalTime:15e3,dependencies:[r,d,l],disabled:!r});let X=(0,t.useCallback)(()=>(0,p._D)([b]),[b]);(0,i.SK)("fetchAllOrders",X,{dependencies:[e,r,a.length,d],intervalTime:1e4,disabled:!r||b!==f.U4.SNX_V2_OP});let K=(0,t.useCallback)(()=>(0,p.HN)({providers:[b]}),[b]);(0,i.SK)("fetchTradeHistry",K,{dependencies:[e,r,b,d,l],intervalTime:3e4}),(0,i.SK)("fetchCrossMarginAccountLiquidations",n.LK,{dependencies:[e,r,l,b],intervalTime:3e4,disabled:!l||b!==f.U4.SNX_V3_BASE});let y=(0,t.useCallback)(()=>(0,p.lz)([b]),[b]);(0,i.SK)("fetchOrderHistory",y,{dependencies:[e,r,l,b],intervalTime:3e4,disabled:!r||b!==f.U4.SNX_V3_BASE})},v=()=>{let e=(0,i.CG)(Z.Gt),a=(0,i.CG)(Z.Tv),r=(0,i.CG)(u.sm),d=(0,i.CG)(m.B8),l=(0,i.CG)(Z.k$),o=(0,i.CG)(c.vl),b=(0,t.useCallback)(()=>(0,p.oZ)({providers:[l]}),[l]);(0,i.X4)(b,{dependencies:[e,r,l],disabled:!r});let k=(0,t.useCallback)(()=>(0,p.MK)([l]),[l]);(0,i.SK)("fetchMarketData",k,{dependencies:[e,l],intervalTime:6e4});let h=(0,t.useCallback)(()=>(0,p.w5)([l]),[l]);(0,i.SK)("fetchFuturesPositionHistory",h,{intervalTime:15e3,dependencies:[r,d,o],disabled:!r});let f=(0,t.useCallback)(()=>(0,p.PT)([l]),[l]);(0,i.SK)("fetchAccountData",f,{intervalTime:3e4,dependencies:[a.length,o,d],disabled:!a.length});let C=(0,t.useCallback)(()=>(0,p.HN)({providers:[l],pageSize:s.jW}),[l]);(0,i.SK)("fetchTradeHistory",C,{dependencies:[e,r,l,d,o],intervalTime:3e4,disabled:!r}),(0,i.SK)("fetchDashboardChartDataV3",n.gE,{dependencies:[e,r,o],intervalTime:3e4,disabled:!o});let v=(0,t.useCallback)(()=>(0,p.lz)([l]),[l]);(0,i.SK)("fetchOrderHistory",v,{dependencies:[e,r,o,d,l],intervalTime:3e4,disabled:!r})},g=()=>{let e=(0,i.CG)(Z.Gt),a=(0,i.CG)(u.sm),{start:r,end:t}=(0,i.CG)(k.qD);(0,i.X4)(b.Mw,{dependencies:[e,a]}),(0,i.X4)(h._K,{dependencies:[e,r,t]}),(0,i.X4)(h.VT,{dependencies:[e,a,r,t],disabled:!a})},T=()=>{let e=(0,i.CG)(u.sm),a=(0,i.CG)(k.f$);(0,i.X4)(o.kz,{dependencies:[e,a],disabled:!e||!a})},S=()=>{let e=(0,i.CG)(m.B8),a=(0,i.CG)(c.vl),r=(0,i.CG)(u._e),t=(0,i.CG)(Z.Gt);(0,i.X4)(p.qT,{dependencies:[e,a,r,t],disabled:!r}),(0,i.SK)("futures/fetchAvgOneClickTxConst",p.x3,{dependencies:[e,a,r,t],intervalTime:18e4,disabled:!r})},G=()=>{let e=(0,i.CG)(Z.k$),a=(0,i.CG)(Z.Gt),r=(0,t.useCallback)(()=>(0,p.MK)([f.U4.SNX_V2_OP]),[]);(0,i.X4)(r,{dependencies:[a]}),(0,i.X4)(d.P_,{dependencies:[e],disabled:e!==f.U4.SNX_V3_BASE}),(0,i.X4)(d.my,{dependencies:[e],disabled:e!==f.U4.SNX_V2_OP}),(0,i.X4)(l.r,{dependencies:[a]})}},69145:function(e,a,r){var t=r(6570),s=r(77161),n=r(24055),c=r(39319),d=r(82127),i=r(32956),l=r(98113),o=r(18904),b=r(85877),k=r(36818),u=r(52483),p=r(11735),Z=r(3118),h=r(3779),m=r(5989),f=r(11282),C=r(90417),v=r(19443),g=r(40734),T=r(37706),S=r(97568),G=r(10484),x=r(68151),_=r(59428),X=r(98563),K=r(40457),y=r(1135),w=r(31989),P=r(83695),z=r(30598),N=r(83340),H=r(84455),A=r(99773),B=r(32223),D=r(60638),V=r(72025),M=r(87970),R=r(98016),O=r(38438),U=r(80629),E=r(97793),j=r(15974),L=r(34602),$=r(66997),q=r(2526),I=r(49119),W=r(77729),F=r(97950),Q=r(74288),J=r(79305),Y=r(3427),ee=r(44470),ea=r(6139),er=r(86196),et=r(66921),es=r(52547),en=r(93720),ec=r(95640),ed=r(41051),ei=r(61740),el=r(71815),eo=r(62558),eb=r(5095),ek=r(80385),eu=r(70986),ep=r(84951),eZ=r(15922),eh=r(50530),em=r(40247),ef=r(12917),eC=r(30797),ev=r(48263),eg=r(52455),eT=r(18840),eS=r(52400),eG=r(51350),ex=r(60154),e_=r(9489),eX=r(35445),eK=r(83567);a.Z=function(){let e=t.Z,a={code:""};switch(void 0!==navigator.languages?a.code=navigator.languages[0]:a.code=navigator.language,a.code){case"af":e=s.Z;break;case"ar-dZ":e=n.Z;break;case"ar-ma":e=c.Z;break;case"ar-sa":e=d.Z;break;case"az":e=i.Z;break;case"be":e=l.Z;break;case"bg":e=o.Z;break;case"bn":e=b.Z;break;case"ca":e=k.Z;break;case"cs":e=u.Z;break;case"cy":e=p.Z;break;case"da":e=Z.Z;break;case"de":e=h.Z;break;case"de-at":e=m.Z;break;case"el":e=f.Z;break;case"en-au":e=C.Z;break;case"en-ca":e=v.Z;break;case"en-gb":e=g.Z;break;case"en-in":e=T.Z;break;case"en-nz":e=S.Z;break;case"en-us":default:e=t.Z;break;case"en-za":e=G.Z;break;case"eo":e=x.Z;break;case"es":e=_.Z;break;case"et":e=X.Z;break;case"eu":e=K.Z;break;case"fa-ir":e=y.Z;break;case"fi":e=w.Z;break;case"fr":e=P.Z;break;case"fr-ca":e=z.Z;break;case"fr-ch":e=N.Z;break;case"gd":e=H.Z;break;case"gl":e=A.Z;break;case"gu":e=B.Z;break;case"he":e=D.Z;break;case"hi":e=V.Z;break;case"hr":e=M.Z;break;case"ht":e=R.Z;break;case"hu":e=O.Z;break;case"hy":e=U.Z;break;case"id":e=E.Z;break;case"is":e=j.Z;break;case"it":e=L.Z;break;case"ja":e=$.Z;break;case"ka":e=q.Z;break;case"kk":e=I.Z;break;case"kn":e=W.Z;break;case"ko":e=F.Z;break;case"lb":e=Q.Z;break;case"lt":e=J.Z;break;case"lv":e=Y.Z;break;case"mk":e=ee.Z;break;case"mn":e=ea.Z;break;case"ms":e=er.Z;break;case"mt":e=et.Z;break;case"nb":e=es.Z;break;case"nl":e=en.Z;break;case"nl-be":e=ec.Z;break;case"nn":e=ed.Z;break;case"pl":e=ei.Z;break;case"pt":e=el.Z;break;case"pt-br":e=eo.Z;break;case"ro":e=eb.Z;break;case"ru":e=ek.Z;break;case"sk":e=eu.Z;break;case"sl":e=ep.Z;break;case"sq":e=eZ.Z;break;case"sr":e=eh.Z;break;case"sr-latn":e=em.Z;break;case"sv":e=ef.Z;break;case"ta":e=eC.Z;break;case"te":e=ev.Z;break;case"th":e=eg.Z;break;case"tr":e=eT.Z;break;case"ug":e=eS.Z;break;case"uk":e=eG.Z;break;case"uz":e=ex.Z;break;case"vi":e=e_.Z;break;case"zh-cn":e=eX.Z;break;case"zh-tw":e=eK.Z}return e}}}]);
//# sourceMappingURL=6464-e7284174720350f5.js.map