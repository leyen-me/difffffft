import{f as d,r as m,o as A,A as D,n as o,b as s,l as k,k as n,q as E,$ as F,a as b,t as T,E as $}from"./index-bf47055b.js";import{u as B,a as M,b as N}from"./role-bd3b5144.js";import{u as U}from"./useRefFormData-84c825c7.js";import"./lodash-3ffe41b4.js";const q={class:"custom-tree-node"},J={__name:"add-or-update",emits:["refreshDataList"],setup(H,{expose:g,emit:V}){const u=d(!1),p=d([]),r=d(),_=d(),{dataForm:t,assign:y,reset:h}=U({id:"",name:"",menu_id_list:[],org_id_list:[],remark:""}),C=l=>{u.value=!0,h(),r.value&&r.value.setCheckedKeys([]),R(l)},R=l=>B().then(e=>{p.value=e.data,l&&x(l)}),x=l=>{M(l).then(e=>{y(e.data),t.value.menu_id_list.forEach(i=>{r.value.setChecked(i,!0)})})},L=d({name:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}),c=()=>{_.value.validate(l=>{if(!l)return!1;t.value.menu_id_list=[...r.value.getHalfCheckedKeys(),...r.value.getCheckedKeys()],N(t.value).then(()=>{$.success({message:"操作成功",duration:500,onClose:()=>{u.value=!1,V("refreshDataList")}})})})};return g({init:C}),(l,e)=>{const i=m("el-input"),f=m("el-form-item"),K=m("el-form"),v=m("el-button"),w=m("el-dialog");return A(),D(w,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=a=>u.value=a),title:n(t).id?"修改":"新增","close-on-click-modal":!1,draggable:""},{footer:o(()=>[s(v,{onClick:e[3]||(e[3]=a=>u.value=!1)},{default:o(()=>[k("取消")]),_:1}),s(v,{type:"primary",onClick:e[4]||(e[4]=a=>c())},{default:o(()=>[k("确定")]),_:1})]),default:o(()=>[s(K,{ref_key:"dataFormRef",ref:_,model:n(t),rules:L.value,"label-width":"120px",onKeyup:e[2]||(e[2]=E(a=>c(),["enter"]))},{default:o(()=>[s(f,{prop:"name",label:"名称"},{default:o(()=>[s(i,{modelValue:n(t).name,"onUpdate:modelValue":e[0]||(e[0]=a=>n(t).name=a),placeholder:"名称"},null,8,["modelValue"])]),_:1}),s(f,{prop:"remark",label:"备注"},{default:o(()=>[s(i,{modelValue:n(t).remark,"onUpdate:modelValue":e[1]||(e[1]=a=>n(t).remark=a),placeholder:"备注"},null,8,["modelValue"])]),_:1}),s(f,{label:"菜单权限"},{default:o(()=>[s(n(F),{ref_key:"menuListTree",ref:r,data:p.value,props:{label:"name",children:"children"},"node-key":"id","show-checkbox":""},{default:o(({node:a,data:S})=>[b("span",q,[b("span",null,T(a.label),1)])]),_:1},8,["data"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}};export{J as default};