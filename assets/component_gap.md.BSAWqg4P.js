import{a1 as a,X as s,e as i,O as h,ar as e,d as l}from"./chunks/framework.CR_kDkbU.js";const b=JSON.parse('{"title":"Gap 间隔槽","description":"","frontmatter":{},"headers":[],"relativePath":"component/gap.md","filePath":"component/gap.md","lastUpdated":1713882533000}'),d={name:"component/gap.md"},n=e('<h1 id="gap-间隔槽" tabindex="-1">Gap 间隔槽 <a class="header-anchor" href="#gap-间隔槽" aria-label="Permalink to &quot;Gap 间隔槽&quot;">​</a></h1><p>一般用于页面布局时代替margin或者padding;或者充当（底部）占位元素。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>通过 <code>height</code> 属性设置标题 <code>background</code> 属性设置背景色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#FFFFFF&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义背景色" tabindex="-1">自定义背景色 <a class="header-anchor" href="#自定义背景色" aria-label="Permalink to &quot;自定义背景色&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#4D80F0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义高度" tabindex="-1">自定义高度 <a class="header-anchor" href="#自定义高度" aria-label="Permalink to &quot;自定义高度&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#4D80F0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;120rpx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="底部安全区" tabindex="-1">底部安全区 <a class="header-anchor" href="#底部安全区" aria-label="Permalink to &quot;底部安全区&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> safe-area-bottom</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>15</td><td>-</td></tr><tr><td>bgColor</td><td>背景颜色</td><td>string</td><td></td><td>transparent</td><td>-</td></tr><tr><td>safeAreaBottom</td><td>开启底部安全区</td><td>boolean</td><td>true/false</td><td>false</td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>自定义样式</td><td>-</td></tr></tbody></table>',15);function p(r,k,o,g,c,E){const t=s("frame");return l(),i("div",null,[h(t),n])}const y=a(d,[["render",p]]);export{b as __pageData,y as default};
