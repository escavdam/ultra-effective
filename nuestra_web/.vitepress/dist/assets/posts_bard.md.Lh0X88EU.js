import{_ as s,c as a,o as i,V as e}from"./chunks/framework.fZt_wkQb.js";const u=JSON.parse('{"title":"Bard","description":"","frontmatter":{},"headers":[],"relativePath":"posts/bard.md","filePath":"posts/bard.md"}'),t={name:"posts/bard.md"},n=e(`<h1 id="bard" tabindex="-1">Bard <a class="header-anchor" href="#bard" aria-label="Permalink to &quot;Bard&quot;">​</a></h1><p>Bard es un modelo de lenguaje desarrollado por Google basado en el bots como GPT.</p><p>Podemos usarla desde <a href="https://bard.google.com/chat" target="_blank" rel="noreferrer">su página oficial</a>, pero también podemos usarla en node con varias librerias.</p><p>Tenemos desde la <a href="https://www.npmjs.com/package/dialogflow" target="_blank" rel="noreferrer">oficial de google</a>, donde nos dejan <a href="https://cloud.google.com/dialogflow?hl=es-419" target="_blank" rel="noreferrer">crear chatbots</a> personalizados, a <a href="https://github.com/PawanOsman/GoogleBard" target="_blank" rel="noreferrer">otras creadas por la comunidad</a> que dan diferentes grados de libertad y facilidad de uso, segun el que queramos usar. Usaremos <a href="https://github.com/EvanZhouDev/bard-ai" target="_blank" rel="noreferrer">este fork</a> del oficial para comunicarnos facilmente con Bard.</p><h2 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-label="Permalink to &quot;Instalación&quot;">​</a></h2><p>Para instalarlo, basta con usar npm:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install bard-ai</span></span></code></pre></div><h2 id="uso" tabindex="-1">Uso <a class="header-anchor" href="#uso" aria-label="Permalink to &quot;Uso&quot;">​</a></h2><p>Para usarlo, basta con importarlo y crear una instancia de la clase <code>Bard</code>, pasandole como argumento la cookie de bard y luego preguntarle usando el método <code>ask</code>.</p><p>Para conseguir la cookie, abre tu navegador en la pagina de bard, abre la consola de desarrollador y ve a <code>Application &gt; Cookies</code> y busca la cookie llamada <code>__Secure-1PSID</code>. Copia el valor de la cookie y pégalo en el código.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bard-ai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> COOKIE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Ingresa aqui tu cookie de bard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COOKIE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pregunta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;enseñame los comandos basicos SQL para interactuar con bases de datos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pregunta));</span></span></code></pre></div><p>Asegúrate de configurar tu package.json para que se ejecute como un módulo, añadiendo lo siguiente:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Si quieres poder pasarle la pregunta como argumento al script, puedes hacerlo de la siguiente manera:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bard-ai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> COOKIE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Ingresa aqui tu cookie de bard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COOKIE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pregunta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.argv[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pregunta));</span></span></code></pre></div><p>Esto es necesario para que podamos usar <code>import</code> en vez de <code>require</code>.</p><p>Ahora puedes ejecutarlo con <code>node index.js &quot;¿Cómo estás?&quot;</code> y te devolverá una respuesta.</p><h2 id="alias" tabindex="-1">Alias <a class="header-anchor" href="#alias" aria-label="Permalink to &quot;Alias&quot;">​</a></h2><p>Configurar el script como un alias en nuestro sistema para poder ejecutarlo desde cualquier lugar puede ser util.</p><p>En linux, podemos hacerlo de la siguiente manera:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre></div><p>Y añadimos la siguiente línea al final del archivo:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node /ruta/a/tu/script/index.js&quot;</span></span></code></pre></div><p>Guardamos el archivo y ejecutamos el siguiente comando para que se apliquen los cambios:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre></div><p>Listo!</p><p>En Windows, podemos hacerlo de la siguiente manera:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doskey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bard=node C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ndex.js </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$*</span></span></code></pre></div><p>El <code>$*</code> es para que podamos pasarle argumentos al script.</p><p>Si en algun momento quieres eliminar el alias, puedes hacerlo con el siguiente comando:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doskey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bard=</span></span></code></pre></div><p>Listo! Ahora puedes usar bard desde cualquier lugar de tu sistema directamente en la terminal.</p>`,32),l=[n];function p(h,r,o,d,k,c){return i(),a("div",null,l)}const E=s(t,[["render",p]]);export{u as __pageData,E as default};
