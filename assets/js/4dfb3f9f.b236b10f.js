"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3173],{4860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),r=n(8453);const i={"sidebar label":"\u54c8\u55bd",slug:"dfasdfsadfsad"},a=void 0,o={id:"\u4fa7\u8fb9\u680f",title:"\u4fa7\u8fb9\u680f",description:"\u4e00\u3001\u7b2c\u4e00\u79cd",source:"@site/docs/wordpress-astra-theme/\u4fa7\u8fb9\u680f.md",sourceDirName:".",slug:"/dfasdfsadfsad",permalink:"/wordpress-astra-theme/dfasdfsadfsad",draft:!1,unlisted:!1,editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/docs/wordpress-astra-theme/\u4fa7\u8fb9\u680f.md",tags:[],version:"current",lastUpdatedAt:1723972567e3,frontMatter:{"sidebar label":"\u54c8\u55bd",slug:"dfasdfsadfsad"},sidebar:"zidongSidebar",previous:{title:"index",permalink:"/wordpress-astra-theme/"},next:{title:"\u4fee\u6539Post Navigation",permalink:"/wordpress-astra-theme/\u4fee\u6539Post Navigation"}},c={},d=[{value:"\u4e00\u3001\u7b2c\u4e00\u79cd",id:"\u4e00\u7b2c\u4e00\u79cd",level:3}];function p(e){const t={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\u4e00\u7b2c\u4e00\u79cd",children:"\u4e00\u3001\u7b2c\u4e00\u79cd"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"//\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868\uff0c\u5c0f\u5de5\u5177\u7684\u5b9a\u4e49\u3001\u6ce8\u518c\u548c\u52a0\u8f7d\nclass Recent_Category_Posts_Widget extends WP_Widget {\n\n    public function __construct() {\n        parent::__construct(\n            'recent_category_posts_widget',\n            '\u6700\u8fd1\u5206\u7c7b\u6587\u7ae0\u5c0f\u5de5\u5177',\n            array('description' => '\u663e\u793a\u5f53\u524d\u5206\u7c7b\u7684\u6700\u8fd1\u6587\u7ae0\u5217\u8868\uff0c\u5e76\u9ad8\u4eae\u5f53\u524d\u6587\u7ae0')\n        );\n    }\n\n    public function widget($args, $instance) {\n        echo $args['before_widget'];\n        \n        $categories = get_the_category();\n        $category_name = !empty($categories) ? esc_html($categories[0]->name . \" \u9a8c\u5382\") : '';\n        \n        ?>\n        <div class=\"recent-category-posts\">\n            <div class=\"widget-title\">\n                <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n                <span><?php echo $category_name; ?></span>\n            </div>\n            <ul class=\"post-list\">\n                <?php\n                $current_post_id = get_the_ID();\n                if (!empty($categories)) {\n                    $current_category_id = $categories[0]->term_id;\n\n                    $recent_posts = get_posts(array(\n                        'numberposts' => 20,\n                        'post_status' => 'publish',\n                        'category' => $current_category_id\n                    ));\n\n                    foreach ($recent_posts as $post) :\n                        $post_title = $post->post_title;\n                        $post_url = get_permalink($post->ID);\n                        $is_current = ($post->ID == $current_post_id) ? 'current-post' : '';\n                        ?>\n                        <li class=\"<?php echo $is_current; ?>\">\n                            <a href=\"<?php echo esc_url($post_url); ?>\" title=\"<?php echo esc_attr($post_title); ?>\">\n                                <?php echo esc_html($post_title); ?>\n                            </a>\n                        </li>\n                    <?php\n                    endforeach;\n                }\n                ?>\n            </ul>\n        </div>\n        <?php\n        echo $args['after_widget'];\n    }\n\n    public function form($instance) {\n        // Widget admin form\n    }\n\n    public function update($new_instance, $old_instance) {\n        // Save widget options\n        return $new_instance;\n    }\n}\n\nfunction register_recent_category_posts_widget() {\n    register_widget('Recent_Category_Posts_Widget');\n}\nadd_action('widgets_init', 'register_recent_category_posts_widget');\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240801130407054.png",alt:"image-20240801130407054"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);