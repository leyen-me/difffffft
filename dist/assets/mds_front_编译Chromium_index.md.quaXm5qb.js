import{_ as s,c as n,o as a,R as e}from"./chunks/framework.43nt70q0.js";const m=JSON.parse('{"title":"Chromium","description":"","frontmatter":{"title":"Chromium","date":"2023-07-01","categories":["前端"]},"headers":[],"relativePath":"mds/front/编译Chromium/index.md","filePath":"mds/front/编译Chromium/index.md","lastUpdated":null}'),t={name:"mds/front/编译Chromium/index.md"},p=e(`<p>记录一下<a href="https://github.com/difffffft/chromium" target="_blank" rel="noreferrer">chromium</a>内核编译的流程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.windows官方构建流程</span></span>
<span class="line"><span>https://github.com/difffffft/chromium/blob/main/docs/windows_build_instructions.md</span></span></code></pre></div><h2 id="_1-准备工作" tabindex="-1">1.准备工作 <a class="header-anchor" href="#_1-准备工作" aria-label="Permalink to &quot;1.准备工作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>A 64-bit Intel machine with at least 8GB of RAM. More than 16GB is highly recommended.</span></span>
<span class="line"><span>At least 100GB of free disk space on an NTFS-formatted hard drive. FAT32 will not work, as some of the Git packfiles are larger than 4GB.</span></span>
<span class="line"><span>An appropriate version of Visual Studio, as described below.</span></span>
<span class="line"><span>Windows 10 or newer.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>具有至少 8GB RAM 的 64 位 Intel 计算机。 强烈建议 16GB 以上。</span></span>
<span class="line"><span>NTFS 格式的硬盘上至少有 100GB 的可用磁盘空间。 FAT32 不起作用，因为某些 Git 包文件大于 4GB。</span></span>
<span class="line"><span>Visual Studio 的适当版本，如下所述。</span></span>
<span class="line"><span>Windows 10 或更高版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chromium requires Visual Studio 2022 (&gt;=17.0.0) to build. Visual Studio can also be used to debug Chromium. The clang-cl compiler is used but Visual Studio&#39;s header files, libraries, and some tools are required. Visual Studio Community Edition should work if its license is appropriate for you. You must install the &quot;Desktop development with C++&quot; component and the &quot;MFC/ATL support&quot; sub-components. This can be done from the command line by passing these arguments to the Visual Studio installer (see below for ARM64 instructions):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chromium 需要 Visual Studio 2022 (&gt;=17.0.0) 才能构建。 Visual Studio 也可用于调试 Chromium。 使用 clang-cl 编译器，但需要 Visual Studio 的头文件、库和一些工具。 如果 Visual Studio Community Edition 的许可证适合您，则应该可以使用。 您必须安装“C++ 桌面开发”组件和“MFC/ATL 支持”子组件。 这可以从命令行通过将这些参数传递给 Visual Studio 安装程序来完成（请参阅下面的 ARM64 说明）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Windows 11 SDK version 10.0.22621.0. This can be installed separately or by checking the appropriate box in the Visual Studio Installer.</span></span>
<span class="line"><span>(Windows 11) SDK Debugging Tools 10.0.22621.755. This version of the Debugging tools is needed in order to support reading the large-page PDBs that Chrome uses to allow greater-than 4 GiB PDBs. This can be installed after the matching Windows SDK version is installed, from: Control Panel -&gt; Programs and Features -&gt; Windows Software Development Kit [version] -&gt; Change -&gt; Debugging Tools for Windows.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Windows 11 SDK 版本 10.0.22621.0。 这可以单独安装，也可以通过选中 Visual Studio 安装程序中的相应框来安装。</span></span>
<span class="line"><span>(Windows 11) SDK 调试工具 10.0.22621.755。 需要此版本的调试工具来支持读取大页面 PDB，Chrome 使用该大页面 PDB 来允许大于 4 GiB 的 PDB。 可以在安装匹配的 Windows SDK 版本后进行安装，从：控制面板 -&gt; 程序和功能 -&gt; Windows 软件开发工具包 [版本] -&gt; 更改 -&gt; Windows 调试工具。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置 -&gt; 安装的应用 -&gt; Windows Software Development Kit - Windows 10.0.22621.1778 -&gt; 修改 -&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Change And Next -&gt; 勾选Debugging Tools for Windows -&gt; Change</span></span></code></pre></div><h2 id="_2-下载depot-tools" tabindex="-1">2.下载depot_tools <a class="header-anchor" href="#_2-下载depot-tools" aria-label="Permalink to &quot;2.下载depot\\_tools&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Download the depot_tools bundle and extract it somewhere (eg: C:\\src\\depot_tools).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下载 depot_tools 包并将其解压到某个位置（例如：C:\\src\\depot_tools）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://storage.googleapis.com/chrome-infra/depot_tools.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>确保你的电脑上没有python脚本。</span></span></code></pre></div><h2 id="_3-为depot-tools配置环境变量" tabindex="-1">3.为depot_tools配置环境变量 <a class="header-anchor" href="#_3-为depot-tools配置环境变量" aria-label="Permalink to &quot;3.为depot\\_tools配置环境变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Add depot_tools to the start of your PATH (must be ahead of any installs of Python. Note that environment variable names are case insensitive).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Assuming you unzipped the bundle to C:\\src\\depot_tools, open: Control Panel → System and Security → System → Advanced system settings</span></span>
<span class="line"><span>If you have Administrator access, Modify the PATH system variable and put C:\\src\\depot_tools at the front (or at least in front of any directory that might already have a copy of Python or Git).</span></span>
<span class="line"><span>If you don&#39;t have Administrator access, you can add a user-level PATH environment variable by opening: Control Panel → System and Security → System → Search for &quot;Edit environment variables for your account&quot;</span></span>
<span class="line"><span>Add C:\\src\\depot_tools at the front. Note: If your system PATH has a Python in it, you will be out of luck.</span></span>
<span class="line"><span>Also, add a DEPOT_TOOLS_WIN_TOOLCHAIN environment variable in the same way, and set it to 0. This tells depot_tools to use your locally installed version of Visual Studio (by default, depot_tools will try to use a google-internal version).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You may also have to set variable vs2022_install to your installation path of Visual Studio 2022, like set vs2022_install=C:\\Program Files\\Microsoft Visual Studio\\2022\\Professional.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>From a cmd.exe shell, run:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将 depot_tools 添加到 PATH 的开头（必须位于任何 Python 安装之前。请注意，环境变量名称不区分大小写）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>假设您将捆绑包解压到 C:\\src\\depot_tools，打开：控制面板 → 系统和安全 → 系统 → 高级系统设置</span></span>
<span class="line"><span>如果您具有管理员访问权限，请修改 PATH 系统变量并将 C:\\src\\depot_tools 放在前面（或至少放在可能已经有 Python 或 Git 副本的任何目录前面）。</span></span>
<span class="line"><span>如果您没有管理员访问权限，可以通过以下方式添加用户级 PATH 环境变量：控制面板 → 系统和安全 → 系统 → 搜索“编辑您帐户的环境变量”</span></span>
<span class="line"><span>在前面添加C:\\src\\depot_tools。 注意：如果你的系统 PATH 中有 Python，那么你就不走运了。</span></span>
<span class="line"><span>另外，以相同的方式添加 DEPOT_TOOLS_WIN_TOOLCHAIN 环境变量，并将其设置为 0。这告诉 depot_tools 使用本地安装的 Visual Studio 版本（默认情况下，depot_tools 将尝试使用 google 内部版本）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>您可能还需要将变量 vs2022_install 设置为 Visual Studio 2022 的安装路径，例如 set vs2022_install=C:\\Program Files\\Microsoft Visual Studio\\2022\\Professional。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从 cmd.exe shell 运行：</span></span></code></pre></div><h2 id="_4-控制台配置全局代理-运行gclient。" tabindex="-1">4.控制台配置全局代理，运行gclient。 <a class="header-anchor" href="#_4-控制台配置全局代理-运行gclient。" aria-label="Permalink to &quot;4.控制台配置全局代理，运行gclient。&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set http_proxy=http://127.0.0.1:15732&amp;&amp; set https_proxy=http://127.0.0.1:15732</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gclient</span></span></code></pre></div><h2 id="_5-注意事项" tabindex="-1">5.注意事项 <a class="header-anchor" href="#_5-注意事项" aria-label="Permalink to &quot;5.注意事项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>On first run, gclient will install all the Windows-specific bits needed to work with the code, including msysgit and python.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you run gclient from a non-cmd shell (e.g., cygwin, PowerShell), it may appear to run properly, but msysgit, python, and other tools may not get installed correctly.</span></span>
<span class="line"><span>If you see strange errors with the file system on the first run of gclient, you may want to disable Windows Indexing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>首次运行时，gclient 将安装使用代码所需的所有 Windows 特定位，包括 msysgit 和 python。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果您从非 cmd shell（例如 cygwin、PowerShell）运行 gclient，它可能看起来运行正常，但 msysgit、python 和其他工具可能无法正确安装。</span></span>
<span class="line"><span>如果您在第一次运行 gclient 时看到文件系统出现奇怪的错误，您可能需要禁用 Windows 索引。</span></span></code></pre></div><h2 id="_6-检查python安装" tabindex="-1">6.检查python安装 <a class="header-anchor" href="#_6-检查python安装" aria-label="Permalink to &quot;6.检查python安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>After running gclient open a command prompt and type where python and confirm that the depot_tools python.bat comes ahead of any copies of python.exe. Failing to ensure this can lead to overbuilding when using gn - see crbug.com/611087.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>App Execution Aliases can conflict with other installations of python on the system so disable these for &#39;python.exe&#39; and &#39;python3.exe&#39; by opening &#39;App execution aliases&#39; section of Control Panel and unticking the boxes next to both of these that point to &#39;App Installer&#39;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行 gclient 后，打开命令提示符并键入 where python 并确认 depot_tools python.bat 位于 python.exe 的任何副本之前。 如果不能确保这一点，可能会导致使用 gn 时过度构建 - 请参阅 crbug.com/611087。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>应用程序执行别名可能与系统上的其他 python 安装发生冲突，因此请通过打开控制面板的“应用程序执行别名”部分并取消选中这两个选项旁边的框来禁用“python.exe”和“python3.exe”的这些别名 到“应用程序安装程序”。</span></span></code></pre></div><h2 id="_7-配置git" tabindex="-1">7.配置Git <a class="header-anchor" href="#_7-配置git" aria-label="Permalink to &quot;7.配置Git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global user.name &quot;My Name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;my-name@chromium.org&quot;</span></span>
<span class="line"><span>git config --global core.autocrlf false</span></span>
<span class="line"><span>git config --global core.filemode false</span></span>
<span class="line"><span>git config --global branch.autosetuprebase always</span></span></code></pre></div><h2 id="_8-新建目录" tabindex="-1">8.新建目录 <a class="header-anchor" href="#_8-新建目录" aria-label="Permalink to &quot;8.新建目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Create a chromium directory for the checkout and change to it. You can call this whatever you like and put it wherever you like, as long as the full path has no spaces. However there are some performance benefits for Googlers in placing the directory under C:\\src\\ (See Why is my build slow?).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建一个用于签出的 chromium 目录并更改为该目录。 您可以随意命名它并将其放在任何您喜欢的位置，只要完整路径没有空格即可。 不过，对于 Google 员工来说，将目录放置在 C:\\src\\ 下有一些性能优势（请参阅为什么我的构建速度很慢？）。</span></span></code></pre></div><h2 id="_9-下载最新的源码版本" tabindex="-1">9.下载最新的源码版本 <a class="header-anchor" href="#_9-下载最新的源码版本" aria-label="Permalink to &quot;9.下载最新的源码版本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Run the fetch tool from depot_tools to check out the code and its dependencies.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行 depot_tools 中的获取工具来检查代码及其依赖项。这会获取最新的源码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fetch --no-history chromium</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>If you don&#39;t want the full repo history, you can save a lot of time by adding the --no-history flag to fetch.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Expect the command to take over an hour on even a fast connection, and many hours on slower ones. You should configure your PC so that it doesn&#39;t sleep or hibernate during the fetch or else errors may occur. If errors occur while fetching sub-repos then you can start over, or you may be able to correct them by going to the chromium/src directory and running this command:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果您不需要完整的存储库历史记录，可以通过添加 --no-history 标志来获取，从而节省大量时间。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>即使在快速连接上，该命令也需要花费一个多小时，而在较慢的连接上，该命令也会花费几个小时。 您应该配置您的电脑，使其在获取期间不会睡眠或休眠，否则可能会出现错误。 如果在获取子存储库时发生错误，那么您可以重新开始，或者您可以通过转到 chromium/src 目录并运行以下命令来更正它们：</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Chromium uses Ninja as its main build tool along with a tool called GN to generate .ninja files. You can create any number of build directories with different configurations. To create a build directory:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chromium 使用 Ninja 作为其主要构建工具以及名为 GN 的工具来生成 .ninja 文件。 您可以创建任意数量的具有不同配置的构建目录。 创建构建目录：</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd See //BUILD.gn:83:1: which caused the file to be included.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gclient config --cache-dir C:\\chromium_git_cache https://chromium.googlesource.com/chromium/src.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gclient sync --revision src@109.0.5414.120 --with_tags --with_branch_heads</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd src </span></span>
<span class="line"><span></span></span>
<span class="line"><span>gn gen --ide=vs2022 --winsdk=&quot;10.0.20348.0&quot; out/chromium_debug_x86 --args=&quot;is_debug = true is_component_build = true enable_nacl = false target_cpu = \\&quot;x86\\&quot; proprietary_codecs = true ffmpeg_branding = \\&quot;Chrome\\&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--ninja-executable=C:\\src\\chromium\\src\\third_party\\ninja\\ninja.exe</span></span></code></pre></div><h2 id="_10-开始构建" tabindex="-1">10.开始构建 <a class="header-anchor" href="#_10-开始构建" aria-label="Permalink to &quot;10.开始构建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Chromium uses Ninja as its main build tool along with a tool called GN to generate .ninja files. You can create any number of build directories with different configurations. To create a build directory:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chromium 使用 Ninja 作为其主要构建工具以及名为 GN 的工具来生成 .ninja 文件。 您可以创建任意数量的具有不同配置的构建目录。 创建构建目录：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You only have to run this once for each new build directory, Ninja will update the build files as needed.</span></span>
<span class="line"><span>You can replace Default with another name, but it should be a subdirectory of out.</span></span>
<span class="line"><span>For other build arguments, including release settings or using an alternate version of Visual Studio, see GN build configuration. The default will be a debug component build matching the current host operating system and CPU.</span></span>
<span class="line"><span>For more info on GN, run gn help on the command line or read the quick start guide.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>您只需为每个新的构建目录运行一次，Ninja 将根据需要更新构建文件。</span></span>
<span class="line"><span>您可以将 Default 替换为其他名称，但它应该是 out 的子目录。</span></span>
<span class="line"><span>有关其他构建参数，包括发布设置或使用 Visual Studio 的备用版本，请参阅 GN 构建配置。 默认情况下将是与当前主机操作系统和 CPU 匹配的调试组件构建。</span></span>
<span class="line"><span>有关 GN 的更多信息，请在命令行上运行 gn help 或阅读快速入门指南。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reduce file system overhead by excluding build directories from antivirus and indexing software.</span></span>
<span class="line"><span>Store the build tree on a fast disk (preferably SSD).</span></span>
<span class="line"><span>The more cores the better (20+ is not excessive) and lots of RAM is needed (64 GB is not excessive).</span></span>
<span class="line"><span>There are some gn flags that can improve build speeds. You can specify these in the editor that appears when you create your output directory (gn args out\\Default) or on the gn gen command line (gn gen out\\Default --args=&quot;is_component_build = true is_debug = true&quot;). Some helpful settings to consider using include:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>is_component_build = true - this uses more, smaller DLLs, and may avoid having to relink chrome.dll after every change.</span></span>
<span class="line"><span>enable_nacl = false - this disables Native Client which is usually not needed for local builds.</span></span>
<span class="line"><span>target_cpu = &quot;x86&quot; - x86 builds may be slightly faster than x64 builds. Note that if you set this but don&#39;t set enable_nacl = false then build times may get worse.</span></span>
<span class="line"><span>blink_symbol_level = 0 - turn off source-level debugging for blink to reduce build times, appropriate if you don&#39;t plan to debug blink.</span></span>
<span class="line"><span>v8_symbol_level = 0 - turn off source-level debugging for v8 to reduce build times, appropriate if you don&#39;t plan to debug v8.</span></span>
<span class="line"><span>In order to speed up linking you can set symbol_level = 1 or symbol_level = 0 - these options reduce the work the compiler and linker have to do. With symbol_level = 1 the compiler emits file name and line number information so you can still do source-level debugging but there will be no local variable or type information. With symbol_level = 0 there is no source-level debugging but call stacks still have function names. Changing symbol_level requires recompiling everything.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In addition, Google employees should use goma, a distributed compilation system. Detailed information is available internally but the relevant gn arg is:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use_goma = true</span></span>
<span class="line"><span>To get any benefit from goma it is important to pass a large -j value to ninja. A good default is 10*numCores to 20*numCores. If you run autoninja then it will automatically pass an appropriate -j value to ninja for goma or not.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过从防病毒和索引软件中排除构建目录来减少文件系统开销。</span></span>
<span class="line"><span>将构建树存储在快速磁盘（最好是 SSD）上。</span></span>
<span class="line"><span>核心越多越好（20+ 并不过分），并且需要大量 RAM（64 GB 并不过分）。</span></span>
<span class="line"><span>有一些 gn 标志可以提高构建速度。 您可以在创建输出目录时出现的编辑器 (gn args out\\Default) 或在 gn gen 命令行 (gn gen out\\Default --args=&quot;is_component_build = true is_debug = true&quot;) 上指定这些内容。 一些值得考虑使用的有用设置包括：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>is_component_build = true - 这使用更多、更小的 DLL，并且可以避免在每次更改后重新链接 chrome.dll。</span></span>
<span class="line"><span>enable_nacl = false - 这会禁用本地构建通常不需要的 Native Client。</span></span>
<span class="line"><span>target_cpu = &quot;x86&quot; - x86 构建可能比 x64 构建稍快。 请注意，如果您设置了此项但未设置enable_nacl = false，则构建时间可能会变得更糟。</span></span>
<span class="line"><span>眨眼_符号_级别 = 0 - 关闭眨眼的源代码级调试以减少构建时间，如果您不打算调试眨眼，则适用。</span></span>
<span class="line"><span>v8_symbol_level = 0 - 关闭 v8 的源代码级调试以减少构建时间，如果您不打算调试 v8，则适用。</span></span>
<span class="line"><span>为了加快链接速度，您可以设置 symbol_level = 1 或 symbol_level = 0 - 这些选项减少了编译器和链接器必须执行的工作。 当symbol_level = 1时，编译器会发出文件名和行号信息，因此您仍然可以进行源代码级调试，但不会有局部变量或类型信息。 当symbol_level = 0时，没有源代码级调试，但调用堆栈仍然有函数名称。 更改 symbol_level 需要重新编译所有内容。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>此外，Google员工应该使用goma，一个分布式编译系统。 详细信息可在内部获取，但相关的 gn arg 是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use_goma = true</span></span>
<span class="line"><span>为了从 goma 中获得任何好处，将大的 -j 值传递给 ninja 非常重要。 一个好的默认值是 10*numCores 到 20*numCores。 如果您运行 autoninja，那么它会自动将适当的 -j 值传递给 ninja 是否为 goma。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>管理员身份运行CMD</span></span>
<span class="line"><span>gn gen out\\Default</span></span>
<span class="line"><span>autoninja -C out\\Default chrome</span></span></code></pre></div>`,26),l=[p];function i(o,c,r,d,u,h){return a(),n("div",null,l)}const b=s(t,[["render",i]]);export{m as __pageData,b as default};
