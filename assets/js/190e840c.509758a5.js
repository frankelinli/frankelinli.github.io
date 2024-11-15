"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3023],{95034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var s=n(74300),i=n(74848),r=n(28453);const o={date:"2024-06-24 00:52",slug:"WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868"},c=void 0,a={authorsImageUrls:[]},l=[{value:"\u6539\u8fdb\u6b65\u9aa42\uff1a\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5c0f\u5de5\u5177",id:"\u6539\u8fdb\u6b65\u9aa42\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5c0f\u5de5\u5177",level:3},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:3},{value:"\u6b65\u9aa4 3\uff1a\u5728\u4fa7\u8fb9\u680f\u4e2d\u6dfb\u52a0\u5c0f\u5de5\u5177",id:"\u6b65\u9aa4-3\u5728\u4fa7\u8fb9\u680f\u4e2d\u6dfb\u52a0\u5c0f\u5de5\u5177",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function d(e){const t={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u4f60\u7684\u9700\u6c42\uff0c\u5373\u6839\u636e\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u5185\u5bb9\uff0c\u53ef\u4ee5\u5728\u6b65\u9aa42\u4e2d\u6539\u8fdb\u5c0f\u5de5\u5177\u7684\u4ee3\u7801\uff0c\u4f7f\u5176\u80fd\u591f\u52a8\u6001\u83b7\u53d6\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\uff0c\u5e76\u6839\u636e\u5206\u7c7b\u663e\u793a\u76f8\u5e94\u7684\u6587\u7ae0\u5217\u8868\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u6539\u8fdb\u6b65\u9aa42\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5c0f\u5de5\u5177",children:"\u6539\u8fdb\u6b65\u9aa42\uff1a\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5c0f\u5de5\u5177"}),"\n",(0,i.jsxs)(t.p,{children:["\u4ee5\u4e0b\u662f\u6539\u8fdb\u540e\u7684\u81ea\u5b9a\u4e49\u5c0f\u5de5\u5177\u4ee3\u7801\uff0c",(0,i.jsx)("u",{children:"\u5b83\u5c06\u5728\u4fa7\u8fb9\u680f\u4e2d\u663e\u793a\u5f53\u524d\u6587\u7ae0\u6240\u5c5e\u5206\u7c7b\u7684\u6587\u7ae0\u5217\u8868\uff1a"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"class Dynamic_Category_Posts_Widget extends WP_Widget {\n    function __construct() {\n        parent::__construct(\n            'dynamic_category_posts_widget',\n            __('Dynamic Category Posts Widget', 'my_theme'),\n            array('description' => __('Displays a list of posts from the current post\\'s category.', 'my_theme'))\n        );\n    }\n\n    public function widget($args, $instance) {\n        if (is_single()) {\n            global $post;\n            // \u83b7\u53d6\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\n            $categories = get_the_category($post->ID);\n            if (!empty($categories)) {\n                // \u5047\u8bbe\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5206\u7c7b\n                $category_id = $categories[0]->term_id;\n                \n                echo $args['before_widget'];\n                if (!empty($instance['title'])) {\n                    echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];\n                }\n\n                $number_of_posts = !empty($instance['number_of_posts']) ? $instance['number_of_posts'] : 5;\n\n                $query_args = array(\n                    'cat' => $category_id,\n                    'posts_per_page' => $number_of_posts,\n                );\n\n                $query = new WP_Query($query_args);\n\n                if ($query->have_posts()) {\n                    echo '<ul class=\"category-posts-list\">';\n                    while ($query->have_posts()) {\n                        $query->the_post();\n                        echo '<li><a href=\"' . get_permalink() . '\">' . get_the_title() . '</a></li>';\n                    }\n                    echo '</ul>';\n                }\n\n                wp_reset_postdata();\n\n                echo $args['after_widget'];\n            }\n        }\n    }\n\n    public function form($instance) {\n        $title = !empty($instance['title']) ? $instance['title'] : __('Category Posts', 'my_theme');\n        $number_of_posts = !empty($instance['number_of_posts']) ? $instance['number_of_posts'] : 5;\n        ?>\n        <p>\n            <label for=\"<?php echo esc_attr($this->get_field_id('title')); ?>\"><?php esc_attr_e('Title:', 'my_theme'); ?></label>\n            <input class=\"widefat\" id=\"<?php echo esc_attr($this->get_field_id('title')); ?>\" name=\"<?php echo esc_attr($this->get_field_name('title')); ?>\" type=\"text\" value=\"<?php echo esc_attr($title); ?>\">\n        </p>\n        <p>\n            <label for=\"<?php echo esc_attr($this->get_field_id('number_of_posts')); ?>\"><?php esc_attr_e('Number of Posts:', 'my_theme'); ?></label>\n            <input class=\"widefat\" id=\"<?php echo esc_attr($this->get_field_id('number_of_posts')); ?>\" name=\"<?php echo esc_attr($this->get_field_name('number_of_posts')); ?>\" type=\"number\" value=\"<?php echo esc_attr($number_of_posts); ?>\">\n        </p>\n        <?php\n    }\n\n    public function update($new_instance, $old_instance) {\n        $instance = array();\n        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';\n        $instance['number_of_posts'] = (!empty($new_instance['number_of_posts'])) ? intval($new_instance['number_of_posts']) : 5;\n\n        return $instance;\n    }\n}\n\nfunction register_dynamic_category_posts_widget() {\n    register_widget('Dynamic_Category_Posts_Widget');\n}\nadd_action('widgets_init', 'register_dynamic_category_posts_widget');\n"})}),"\n",(0,i.jsx)(t.h3,{id:"\u89e3\u91ca",children:"\u89e3\u91ca"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u6784\u9020\u51fd\u6570"}),"\uff1a\u5b9a\u4e49\u5c0f\u5de5\u5177\u7684\u540d\u79f0\u548c\u63cf\u8ff0\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:"widget"})," \u65b9\u6cd5"]}),"\uff1a\u8fd9\u662f\u5c0f\u5de5\u5177\u7684\u8f93\u51fa\u5185\u5bb9\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u68c0\u67e5\u5f53\u524d\u9875\u9762\u662f\u5426\u4e3a\u5355\u7bc7\u6587\u7ae0\u9875\u9762\uff08",(0,i.jsx)(t.code,{children:"is_single()"}),"\uff09\uff0c\u7136\u540e\u83b7\u53d6\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\uff08",(0,i.jsx)(t.code,{children:"get_the_category()"}),"\uff09\u3002\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5206\u7c7b\u7684ID\u6765\u67e5\u8be2\u5e76\u663e\u793a\u8be5\u5206\u7c7b\u4e0b\u7684\u6587\u7ae0\u5217\u8868\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:"form"})," \u65b9\u6cd5"]}),"\uff1a\u5b9a\u4e49\u5c0f\u5de5\u5177\u7684\u540e\u53f0\u8868\u5355\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5c0f\u5de5\u5177\u7684\u6807\u9898\u548c\u663e\u793a\u6587\u7ae0\u7684\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:"update"})," \u65b9\u6cd5"]}),"\uff1a\u4fdd\u5b58\u5c0f\u5de5\u5177\u7684\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"\u6b65\u9aa4-3\u5728\u4fa7\u8fb9\u680f\u4e2d\u6dfb\u52a0\u5c0f\u5de5\u5177",children:"\u6b65\u9aa4 3\uff1a\u5728\u4fa7\u8fb9\u680f\u4e2d\u6dfb\u52a0\u5c0f\u5de5\u5177"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u5bfc\u822a\u5230\u201c\u5916\u89c2\u201d > \u201c\u5c0f\u5de5\u5177\u201d"}),"\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u627e\u5230\u201cDynamic Category Posts Widget\u201d\u5c0f\u5de5\u5177"}),"\uff0c\u5c06\u5176\u62d6\u653e\u5230\u4f60\u4e4b\u524d\u6ce8\u518c\u7684\u201cLeft Sidebar\u201d\u533a\u57df\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u914d\u7f6e\u5c0f\u5de5\u5177"}),"\uff0c\u8bbe\u7f6e\u6807\u9898\u548c\u663e\u793a\u7684\u6587\u7ae0\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsxs)(t.p,{children:["\u901a\u8fc7\u4e0a\u8ff0\u6539\u8fdb\uff0c\u4f60\u7684",(0,i.jsx)("u",{children:"\u4fa7\u8fb9\u680f\u5c0f\u5de5\u5177\u5c06\u52a8\u6001\u663e\u793a\u5f53\u524d\u6587\u7ae0\u6240\u5c5e\u5206\u7c7b\u7684\u6587\u7ae0\u5217\u8868"}),"\uff0c\u5e76\u5728",(0,i.jsx)(t.strong,{children:"\u70b9\u51fb\u6587\u7ae0\u6807\u9898\u65f6\u5728\u5f53\u524d\u7a97\u53e3\u6253\u5f00\u5bf9\u5e94\u7684\u6587\u7ae0\u9875\u9762"}),"\u3002"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"\u8fd9\u662f\u6211\u4e00\u5fc3\u60f3\u5b9e\u73b0\u4fa7\u8fb9\u680f\u663e\u793a\u5206\u7c7b\u5217\u8868\uff0c\u6253\u5f00\u6587\u7ae0\u3002\u8fd9\u662f\u4e00\u79cd\u65b9\u6cd5\u3002\u641e\u4e86\u5f88\u4e45\u624d\u60f3\u660e\u767d\u8fd9\u4e2a\u4e8b\u60c5"})})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},74300:e=>{e.exports=JSON.parse('{"permalink":"/blog/WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/06-24-WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868.md","source":"@site/blog/2024/06-24-WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868.md","title":"WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868","description":"\u4e3a\u4e86\u5b9e\u73b0\u4f60\u7684\u9700\u6c42\uff0c\u5373\u6839\u636e\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u5185\u5bb9\uff0c\u53ef\u4ee5\u5728\u6b65\u9aa42\u4e2d\u6539\u8fdb\u5c0f\u5de5\u5177\u7684\u4ee3\u7801\uff0c\u4f7f\u5176\u80fd\u591f\u52a8\u6001\u83b7\u53d6\u5f53\u524d\u6587\u7ae0\u7684\u5206\u7c7b\uff0c\u5e76\u6839\u636e\u5206\u7c7b\u663e\u793a\u76f8\u5e94\u7684\u6587\u7ae0\u5217\u8868\u3002","date":"2024-06-24T00:52:00.000Z","tags":[],"readingTime":3.41,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2024-06-24 00:52","slug":"WordPress\u6839\u636e\u6587\u7ae0\u5206\u7c7b\u7c7b\u52a8\u6001\u663e\u793a\u4fa7\u8fb9\u680f\u6587\u7ae0\u5217\u8868"},"unlisted":false,"lastUpdatedAt":1719200854000,"prevItem":{"title":"wordpress\u4f7f\u7528React\u5217\u51fa\u7ad9\u70b9\u5168\u90e8\u5e16\u5b50","permalink":"/blog/wordpress\u4f7f\u7528React\u5217\u51fa\u7ad9\u70b9\u5168\u90e8\u5e16\u5b50"},"nextItem":{"title":"WordPress\u7ad9\u70b9\u5982\u4f55\u653e\u7f6eGoogle\u5e7f\u544a\u4ee3\u7801","permalink":"/blog/WordPress\u7ad9\u70b9\u5982\u4f55\u653e\u7f6eGoogle\u5e7f\u544a\u4ee3\u7801"}}')}}]);