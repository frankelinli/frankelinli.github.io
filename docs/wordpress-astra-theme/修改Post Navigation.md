

###post navigation中显示文章标题，通过WordPress的过滤器

https://wpastra.com/docs/replace-navigation-strings-on-single-post/
以下过滤器将获取上一篇和下一篇文章标题，并将它们显示为导航链接。

```php
add_filter( 'astra_single_post_navigation', 'astra_change_next_prev_text' );

/**
 * Function to change the Next Post/ Previous post text.
 *
 * @param array $args Arguments for next post / previous post links.
 * @return array
 */
function astra_change_next_prev_text( $args ) {
	$next_post = get_next_post();
	$prev_post = get_previous_post();
	$next_text = false;
	if ( $next_post ) {
		$next_text = sprintf(
			'%s <span class="ast-right-arrow">→</span>',
			$next_post->post_title
		);
	}
	$prev_text = false;
	if ( $prev_post ) {
		$prev_text = sprintf(
			'<span class="ast-left-arrow">←</span> %s',
			$prev_post->post_title
		);
	}
	$args['next_text'] = $next_text;
	$args['prev_text'] = $prev_text;
	return $args;
}
```

![image-20240818093644100](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240818093644100.png)