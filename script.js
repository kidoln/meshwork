const content = {
  zh: {
    metaTitle: "MeshWork｜让 AI 参与讨论",
    metaDescription:
      "MeshWork 是一个本地优先的创作工作台，让笔记、讨论、AI 参与和 Git 原生共享形成同一个思考系统。",
    nav: {
      principles: "核心理念",
      highlights: "功能亮点",
      flow: "工作流",
      gallery: "知识沉淀",
      comparison: "产品对比",
      roadmap: "发展计划",
      pricing: "版本价格",
      manual: "操作手册",
    },
    hero: {
      eyebrow: "为 Apple 生态而生",
      title: "让 AI 参与讨论\n让共识沉淀为知识",
      subtitle:
        "MeshWork 把笔记、异步讨论、AI 参与者与 Git 原生共享放进同一个创作工作台。AI 不只是旁边的助手，而是可以进入人类讨论，补充视角、追问分歧、推动共识，但知识边界和最终判断始终由你掌握。",
      primary: "了解产品理念",
      secondary: "打开操作手册",
      pointOne: "Local-first",
      pointTwo: "AI as participant",
      pointThree: "Git-native sharing",
    },
    graph: {
      private: "私有知识库",
      discussion: "异步讨论",
      ai: "AI 参与者",
      git: "Git 共享",
      markdown: "Markdown",
      noteOneTitle: "Insight",
      noteOne: "AI 进入讨论，让分歧更快变成清晰共识。",
      noteTwoTitle: "Ownership",
      noteTwo: "文件在本地，边界由你决定。",
    },
    intro: {
      kicker: "Product Philosophy",
      title: "不是另一个在线文档，\n而是人与 AI 的思考空间。",
      body: "MeshWork 的核心不是把所有人推向实时协同，而是让个人、小团队和 AI 在同一个材料上下文里讨论：人提出问题和判断方向，AI 参与分析、追问和总结，最后把共识回流成可长期保存的 Markdown 知识。",
    },
    principles: {
      kicker: "Principles",
      title: "AI 参与讨论，\n但决策权始终在人。",
      local: {
        title: "本地优先",
        body: "内容首先保存为你能直接访问的本地文件。产品不应该成为数据黑盒，笔记、附件和讨论都要能脱离软件长期存在。",
      },
      git: {
        title: "Git 原生，但不打扰",
        body: "Git 是版本、历史、同步和共享的底层能力。普通用户不需要理解 commit、branch 或 merge，产品负责把复杂性变成可理解的状态。",
      },
      ai: {
        title: "AI 进入讨论",
        body: "AI 不只是改写按钮，而是可以进入人类讨论，提供观点、追问分歧、总结共识并关联已有知识。它推动思考，但最终决策和写入始终由人确认。",
      },
      apple: {
        title: "Apple 原生体验",
        body: "MeshWork 服务 macOS、iPadOS 与 iOS。交互应该像系统应用一样自然，同时保留开放格式、可迁移和可扩展的底层结构。",
      },
    },
    highlights: {
      kicker: "Feature Highlights",
      title: "从文档编辑到讨论协作，\n每一步都可沉淀。",
      body: "MeshWork 的功能围绕开放文档、可追溯讨论和本地数据边界展开。文档可以被编辑、引用、渲染和讨论；讨论结论可以回到知识库；同步与共享交给 Git 完成。",
      editor: {
        title: "双栏与所见即所得编辑",
        body: "文档编辑同时支持双栏工作区和所见即所得体验，既保留结构化 Markdown 的开放性，也让创作过程接近最终阅读效果。",
        tagOne: "双栏编辑",
        tagTwo: "WYSIWYG",
      },
      rendering: {
        title: "PlantUML、Mermaid 与公式渲染",
        body: "渲染层支持 PlantUML、Mermaid、Graphviz 等图形表达，也支持数学公式，让时序图、架构图、流程图、关系图和推导内容都能直接进入文档。",
        tagOne: "PlantUML",
        tagTwo: "Mermaid",
        tagThree: "Graphviz",
      },
      links: {
        title: "WikiLink 文件引用",
        body: "文档内可以通过 WikiLink 引用其他文件并快速跳转，让笔记从孤立页面变成可导航、可回溯的知识网络。",
      },
      discussion: {
        title: "多人讨论与多 AI 智能体",
        body: "讨论区支持多人围绕同一份材料持续讨论，也可以引入多个 AI 智能体作为参与者，从不同角度追问、分析和总结。",
      },
      commands: {
        title: "智能对话命令系统",
        body: "在讨论中直接使用 @提及智能体或成员、#引用知识库文件、/触发自定义命令。让对话与知识自然连接，操作流畅高效。",
        atExample: "@智能体名 或 @成员名 — 提及某人参与对话",
        hashExample: "#文件名 — 引用知识库中的文档内容",
        slashExample: "/命令名 — 执行预定义的自定义命令",
      },
      shell: {
        title: "虚拟 Shell：极致安全，释放 AI 能力",
        body: "专门为 AI 智能体设计的虚拟 Shell 环境，在 Apple 原生应用安全沙箱内运行。既保留系统级安全边界，又提供大模型熟悉的命令行工具接口，让 AI 能够可靠地读取、整理和操作知识材料，同时确保所有操作都在可控范围内执行。",
      },
      knowledgeTools: {
        title: "专门为知识库检索设计的 AI 工具集",
        body: "提供一组专门为知识库文档检索查询访问定制的工具接口，极大提高智能体访问知识库的效率。AI 可以精准定位文档、快速检索内容、智能关联相关知识，让知识检索从模糊匹配升级为精准访问。",
        tools: [
          { name: "search_documents", desc: "BM25 本地搜索" },
          { name: "read_document_section", desc: "按章节读取" },
          { name: "read_outline", desc: "提取大纲结构" },
          { name: "get_links", desc: "文档链接分析" },
          { name: "get_backlinks", desc: "反向链接查询" },
          { name: "get_related_documents", desc: "相关文档推荐" },
          { name: "grep", desc: "全文检索" },
          { name: "find", desc: "文件查找" },
          { name: "ls", desc: "目录浏览" },
          { name: "cat", desc: "文件读取" },
          { name: "tree", desc: "树形结构" },
          { name: "summary", desc: "文档摘要" },
        ],
      },
      search: {
        title: "全局拼音搜索",
        body: "产品中的搜索功能都支持拼音搜索。查找中文内容时，不需要频繁切换输入法，用拼音也能快速定位文档、讨论和知识条目。",
      },
      git: {
        title: "Git 同步与隐私边界",
        body: "所有内容通过 Git 同步和共享。数据首先保存在本地，私有知识库和共享空间保持清晰边界，隐私保护建立在开放文件和可控同步之上。",
      },
      proxy: {
        title: "中国大陆用户友好",
        body: "AI 接口、网络搜索和 Git 访问均支持独立代理配置。灵活选择是否通过代理访问海外服务，确保网络环境的稳定与便捷。",
        tagOne: "AI 代理",
        tagTwo: "搜索代理",
        tagThree: "Git 代理",
      },
    },
    flow: {
      kicker: "Thinking Loop",
      title: "从私有笔记到团队讨论，\n再回到知识库。",
      body: "工作台不是一个巨大的仓库，而是组合视图：你的私有知识库长期独立存在；每个共享空间拥有自己的公共知识库、讨论区与 Git 边界。",
      private: "私有知识库",
      shared: "共享空间",
      discussion: "讨论区",
      git: "Git 历史",
      privateTitle: "先私有，后共享",
      privateBody: "把尚未成型的材料留在自己的知识库中，等待它变得值得分享。",
      sharedTitle: "共享空间承载团队项目",
      sharedBody:
        "公共知识库负责沉淀，讨论区负责碰撞，边界清晰，不混入私人材料。",
      discussionTitle: "讨论可以回流为文档",
      discussionBody:
        "AI 作为讨论参与者和成员一起围绕材料推理，结论被整理成可引用、可版本化的知识。",
    },
    experience: {
      kicker: "Creative Workspace",
      title: "人类提出问题，\nAI 参与推理。",
      body: "MeshWork 把讨论流和知识空间放在同一个上下文中。你可以把文档片段放入讨论，让 AI 以参与者身份和团队成员一起分析，再把经过确认的结论保存回笔记。",
      caption: "像聊天一样发起讨论，像写笔记一样沉淀结论。",
    },
    sharing: {
      kicker: "Git-native Sharing",
      title: "通过 Git 共享，\n但数据仍由你掌控。",
      body: "私有知识库和共享空间都有清晰的数据边界。需要协作时，把对应资源绑定到远端仓库；同类资源可以通过不同分支隔离，既方便共享，也避免混入不该公开的材料。",
      caption: "通过 GitHub、Gitee、GitLab 或自建 Git 服务共享知识库。",
    },
    knowledge: {
      kicker: "Knowledge Graph",
      title: "AI 参与讨论，\n共识进入知识库。",
      body: "讨论不是一次性的聊天记录。AI 和成员围绕材料形成的结论，可以继续连接到文档、引用和知识图谱中，成为后续创作可复用的上下文。",
      caption: "讨论自动连接成可复用的知识图谱。",
    },
    comparison: {
      kicker: "Product Comparison",
      title: "与同类产品的差异",
      body: "MeshWork 结合了聊天软件的协作能力和笔记软件的知识沉淀能力，但核心差异在于：通过 GitHub 进行多人协作，隐私和数据始终由你掌控。",
      chatTitle: "通用聊天软件",
      chatDesc:
        "钉钉、飞书等通用聊天软件通过在群聊中添加智能机器人来实现 AI 辅助功能。机器人可以参与讨论、总结内容并生成文档。但所有数据都存储在平台服务器上，依赖外部服务，隐私由平台掌控。",
      notesTitle: "传统笔记软件",
      notesDesc:
        "Obsidian 等传统笔记软件通过插件支持 AI 功能，但核心是为单人设计的笔记工具。多人协作能力有限，AI 无法参与团队讨论，更适合个人知识管理而非团队协作场景。",
      table: {
        feature: "功能特性",
        chatApps: "聊天软件",
        noteApps: "笔记软件",
        privacy: "数据隐私",
        collaboration: "多人协作",
        aiDiscussion: "AI 参与讨论",
        dataControl: "数据控制",
        openSource: "开放格式",
        platform: "平台支持",
        localFirst: "本地优先 ✓",
        cloudBased: "云端存储 ✗",
        gitNative: "Git 原生 ✓",
        realtime: "实时协同 ✓",
        limited: "功能受限 ✗",
        multiAgent: "多 AI 智能体 ✓",
        botBased: "机器人模式 ○",
        singleUser: "单人模式 ✗",
        fullControl: "完全掌控 ✓",
        platformControl: "平台掌控 ✗",
        openFormat: "Markdown ✓",
        closedFormat: "封闭格式 ✗",
        appleOnly: "Apple 生态",
        crossPlatform: "跨平台",
      },
    },
    roadmap: {
      kicker: "Product Roadmap",
      title: "未来发展规划",
      body: "我们计划开发 Obsidian 插件版本，让 Windows 和 Linux 用户也能使用 MeshWork。但 Apple 原生应用将始终提供最完整、最流畅的体验——深度融合系统特性、更优的性能和更自然的交互。",
      pluginTitle: "Obsidian 插件",
      pluginBody: "为 Windows 和 Linux 用户提供完整的 MeshWork 核心功能，包括 AI 讨论参与、知识库检索和 Git 同步。",
      nativeTitle: "Apple 原生优先",
      nativeBody: "macOS、iPadOS 和 iOS 版本将始终优先获得新功能，并保持最佳的系统集成和用户体验。",
    },
    pricing: {
      kicker: "Pricing Plans",
      title: "选择适合你的版本",
      body: "MeshWork 采用一次性购买模式，无需订阅。从个人笔记创作到团队协作，总有一个版本适合你的需求。",
      table: {
        feature: "功能",
        free: "Free 免费版",
        creator: "Creator 创作者",
        studio: "Studio 工作室",
      },
      features: {
        privateKnowledgeBase: {
          name: "私有知识库",
          free: "✓ 完整功能",
          creator: "✓ 完整功能",
          studio: "✓ 完整功能",
        },
        documentAssistant: {
          name: "文档 AI 辅助",
          free: "—",
          creator: "✓ AI 写作、分析与总结",
          studio: "✓ AI 写作、分析与总结",
        },
        sharedSpace: {
          name: "共享空间",
          free: "—",
          creator: "—",
          studio: "✓ 团队协作与讨论",
        },
      },
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "隐私政策",
    },
    images: {
      heroPoster: "images/poster_2_zh.png",
      workspacePoster: "images/poster_zh.png",
      githubPoster: "images/poster_3_zh.png",
      graphPoster: "images/poster_2_zh.png",
    },
    alt: {
      heroPoster: "MeshWork 中文产品海报，展示团队围绕知识图谱与 AI 进行讨论",
      workspacePoster: "MeshWork 中文产品海报，展示 macOS 原生讨论与笔记界面",
      githubPoster: "MeshWork 中文产品海报，展示通过 GitHub 共享知识",
      graphPoster: "MeshWork 中文产品海报，展示讨论沉淀为知识图谱",
    },
  },
  en: {
    metaTitle: "MeshWork | Turn discussion into knowledge",
    metaDescription:
      "MeshWork is a local-first creative workspace where notes, discussions, AI participation, and Git-native sharing become one thinking system.",
    nav: {
      principles: "Principles",
      highlights: "Highlights",
      flow: "Workflow",
      gallery: "Knowledge",
      comparison: "Compare",
      roadmap: "Roadmap",
      pricing: "Pricing",
      manual: "Manual",
    },
    hero: {
      eyebrow: "Built for the Apple ecosystem",
      title: "Turn discussion into knowledge",
      subtitle:
        "MeshWork brings notes, asynchronous discussion, AI participants, and Git-native sharing into one creative workspace. AI can join human discussion to add perspectives, surface disagreements, and shape alignment while ownership and final judgment stay with you.",
      primary: "Explore the idea",
      secondary: "Open manual",
      pointOne: "Local-first",
      pointTwo: "AI as participant",
      pointThree: "Git-native sharing",
    },
    graph: {
      private: "Private library",
      discussion: "Async discussion",
      ai: "AI partner",
      git: "Git sharing",
      markdown: "Markdown",
      noteOneTitle: "Insight",
      noteOne: "Alignment from discussion becomes reusable knowledge.",
      noteTwoTitle: "Ownership",
      noteTwo: "Files stay local. Boundaries stay yours.",
    },
    intro: {
      kicker: "Product Philosophy",
      title:
        "Not another online document tool. A thinking infrastructure for creators.",
      body: "MeshWork is not designed to push everyone into real-time co-editing. It gives individuals, small teams, and AI a shared material context: develop thoughts in a private library, let AI analyze, question, and summarize inside shared spaces, then preserve decisions as durable Markdown knowledge.",
    },
    principles: {
      kicker: "Principles",
      title: "Four principles define MeshWork.",
      local: {
        title: "Local-first",
        body: "Content starts as local files you can directly access. Notes, assets, and discussions should outlive the app and never become trapped inside a black box.",
      },
      git: {
        title: "Git-native, without the noise",
        body: "Git powers history, sync, recovery, and sharing. Users should not need to understand commits, branches, or merges; the product translates complexity into clear state.",
      },
      ai: {
        title: "AI as participant",
        body: "AI is more than a rewrite button. It joins human discussion, offers perspectives, asks about disagreements, summarizes alignment, and links existing knowledge while humans keep final control.",
      },
      apple: {
        title: "Native Apple experience",
        body: "MeshWork serves macOS, iPadOS, and iOS. It should feel like a first-party app while keeping the underlying structure open, portable, and extensible.",
      },
    },
    highlights: {
      kicker: "Feature Highlights",
      title: "Documents, discussions, and sync stay connected.",
      body: "MeshWork features are built around open documents, traceable discussion, and local data boundaries. Documents can be edited, referenced, rendered, and discussed; conclusions return to the knowledge base; Git handles sync and sharing.",
      editor: {
        title: "Two-pane and WYSIWYG editing",
        body: "The editor supports both a two-pane workspace and WYSIWYG writing, keeping Markdown open while making the writing flow close to the final reading experience.",
        tagOne: "Two-pane",
        tagTwo: "WYSIWYG",
      },
      rendering: {
        title: "PlantUML, Mermaid, and formula rendering",
        body: "The rendering layer supports visual formats such as PlantUML, Mermaid, and Graphviz, plus mathematical formulas, so sequence diagrams, architecture diagrams, flows, relationships, and derivations can live directly inside documents.",
        tagOne: "PlantUML",
        tagTwo: "Mermaid",
        tagThree: "Graphviz",
      },
      links: {
        title: "WikiLink file references",
        body: "Documents can reference other files with WikiLinks and jump between them quickly, turning notes from isolated pages into a navigable knowledge network.",
      },
      discussion: {
        title: "Multi-person and multi-agent discussion",
        body: "Discussion spaces support ongoing collaboration around the same material, with multiple AI agents joining as participants to question, analyze, and summarize from different angles.",
      },
      commands: {
        title: "Smart conversation commands",
        body: "Use @ to mention agents or members, # to reference knowledge files, and / to trigger custom commands. Connect conversation with knowledge seamlessly.",
        atExample: "@agent or @member — Mention someone to join the conversation",
        hashExample: "#filename — Reference document content from the knowledge base",
        slashExample: "/command — Execute predefined custom commands",
      },
      shell: {
        title: "Virtual Shell: Ultimate security, unleashed AI capabilities",
        body: "A purpose-built virtual Shell environment designed specifically for AI agents, running within Apple's native app security sandbox. It maintains system-level security boundaries while providing the familiar command-line tool interface that language models understand, enabling AI to reliably read, organize, and manipulate knowledge materials while ensuring all operations remain within controllable limits.",
      },
      knowledgeTools: {
        title: "AI tools purpose-built for knowledge base retrieval",
        body: "Provides a specialized set of tool interfaces designed specifically for knowledge base document retrieval and access, dramatically improving agent efficiency in accessing knowledge bases. AI can precisely locate documents, rapidly retrieve content, and intelligently correlate related knowledge, upgrading knowledge retrieval from fuzzy matching to precision access.",
        tools: [
          { name: "search_documents", desc: "BM25 local search" },
          { name: "read_document_section", desc: "read by section" },
          { name: "read_outline", desc: "extract outline" },
          { name: "get_links", desc: "link analysis" },
          { name: "get_backlinks", desc: "backlink query" },
          { name: "get_related_documents", desc: "related docs" },
          { name: "grep", desc: "full-text search" },
          { name: "find", desc: "file discovery" },
          { name: "ls", desc: "directory browse" },
          { name: "cat", desc: "file read" },
          { name: "tree", desc: "tree structure" },
          { name: "summary", desc: "document summary" },
        ],
      },
      search: {
        title: "Pinyin-aware search",
        body: "Search across the product supports Pinyin matching, so Chinese documents, discussions, and knowledge items can be found quickly without constantly switching input methods.",
      },
      git: {
        title: "Git sync with privacy boundaries",
        body: "All content syncs and shares through Git. Data starts local, private libraries and shared spaces keep clear boundaries, and privacy protection is built on open files plus controlled synchronization.",
      },
      proxy: {
        title: "Friendly for users in mainland China",
        body: "AI APIs, web search, and Git access all support independent proxy configuration. Choose flexibly whether to use proxies for overseas services, ensuring stable and convenient network access.",
        tagOne: "AI Proxy",
        tagTwo: "Search Proxy",
        tagThree: "Git Proxy",
      },
    },
    flow: {
      kicker: "Thinking Loop",
      title: "Private knowledge, shared spaces, and discussions form one loop.",
      body: "A workbench is not a single giant repository. It is a composed view: your private library stays independent, while each shared space owns its public knowledge base, discussions, and Git boundary.",
      private: "Private library",
      shared: "Shared space",
      discussion: "Discussion",
      git: "Git history",
      privateTitle: "Private first, shared when ready",
      privateBody:
        "Keep early material in your own library until it is mature enough to share.",
      sharedTitle: "Shared spaces carry team projects",
      sharedBody:
        "The public library preserves decisions, the discussion area creates alignment, and private material stays outside the boundary.",
      discussionTitle: "Discussions flow back into documents",
      discussionBody:
        "AI participates with teammates around source material, then confirmed conclusions become referenceable, versioned knowledge.",
    },
    experience: {
      kicker: "Creative Workspace",
      title: "Start a discussion like chat. Preserve the result like notes.",
      body: "MeshWork keeps discussion flow and knowledge space in the same context. Drop document fragments into a topic, let AI participate alongside teammates, then save confirmed conclusions back into notes.",
      caption: "Start discussions like chat, preserve conclusions like notes.",
    },
    sharing: {
      kicker: "Git-native Sharing",
      title: "Share through Git while keeping ownership of your data.",
      body: "Private libraries and shared spaces keep clear data boundaries. When collaboration is needed, bind the resource to a remote repository; resources of the same type can stay isolated through separate branches.",
      caption:
        "Share knowledge through GitHub, Gitee, GitLab, or a self-hosted Git service.",
    },
    knowledge: {
      kicker: "Knowledge Graph",
      title: "AI joins the discussion. Alignment becomes knowledge.",
      body: "Discussions are not disposable chat logs. Conclusions formed by AI and teammates can stay connected to documents, references, and knowledge maps as reusable context for future work.",
      caption: "Discussions connect into reusable knowledge maps.",
    },
    comparison: {
      kicker: "Product Comparison",
      title: "How MeshWork is different",
      body: "MeshWork combines the collaboration features of chat apps with the knowledge preservation of note-taking tools, but with a key difference: multi-person collaboration through GitHub with privacy and data always under your control.",
      chatTitle: "General Chat Apps",
      chatDesc:
        "General chat apps like DingTalk and Feishu implement AI features through smart bots in group chats. Bots can participate in discussions, summarize content, and generate documents. However, all data is stored on platform servers, relies on external services, and privacy is controlled by the platform.",
      notesTitle: "Traditional Note Apps",
      notesDesc:
        "Traditional note-taking apps like Obsidian support AI through plugins, but are designed primarily for individual use. Multi-person collaboration is limited, AI cannot participate in team discussions, making them better suited for personal knowledge management rather than team collaboration scenarios.",
      table: {
        feature: "Features",
        chatApps: "Chat Apps",
        noteApps: "Note Apps",
        privacy: "Data Privacy",
        collaboration: "Collaboration",
        aiDiscussion: "AI in Discussion",
        dataControl: "Data Control",
        openSource: "Open Format",
        platform: "Platform",
        localFirst: "Local-first ✓",
        cloudBased: "Cloud-based ✗",
        gitNative: "Git-native ✓",
        realtime: "Real-time ✓",
        limited: "Limited ✗",
        multiAgent: "Multi-agent ✓",
        botBased: "Bot-based ○",
        singleUser: "Single-user ✗",
        fullControl: "Full control ✓",
        platformControl: "Platform control ✗",
        openFormat: "Markdown ✓",
        closedFormat: "Closed format ✗",
        appleOnly: "Apple only",
        crossPlatform: "Cross-platform",
      },
    },
    roadmap: {
      kicker: "Product Roadmap",
      title: "What's coming next",
      body: "We plan to develop an Obsidian plugin to bring MeshWork to Windows and Linux users. However, the native Apple app will always deliver the most complete and fluid experience—with deeper system integration, better performance, and more natural interactions.",
      pluginTitle: "Obsidian Plugin",
      pluginBody: "Brings core MeshWork features to Windows and Linux users, including AI discussion participation, knowledge base retrieval, and Git sync.",
      nativeTitle: "Apple-First",
      nativeBody: "macOS, iPadOS, and iOS versions will always receive new features first and maintain the best system integration and user experience.",
    },
    pricing: {
      kicker: "Pricing Plans",
      title: "Choose your edition",
      body: "MeshWork uses a one-time purchase model—no subscriptions. From personal note-taking to team collaboration, there's a version that fits your needs.",
      table: {
        feature: "Features",
        free: "Free",
        creator: "Creator",
        studio: "Studio",
      },
      features: {
        privateKnowledgeBase: {
          name: "Private knowledge base",
          free: "✓ Full features",
          creator: "✓ Full features",
          studio: "✓ Full features",
        },
        documentAssistant: {
          name: "Document AI assistance",
          free: "—",
          creator: "✓ AI writing, analysis & summary",
          studio: "✓ AI writing, analysis & summary",
        },
        sharedSpace: {
          name: "Shared spaces",
          free: "—",
          creator: "—",
          studio: "✓ Team collaboration & discussion",
        },
      },
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "Privacy Policy",
    },
    images: {
      heroPoster: "images/poster_2_en.png",
      workspacePoster: "images/poster_en.png",
      githubPoster: "images/poster_3_en.png",
      graphPoster: "images/poster_2_en.png",
    },
    alt: {
      heroPoster:
        "MeshWork English product poster showing a team discussing with AI around a knowledge graph",
      workspacePoster:
        "MeshWork English product poster showing a native macOS discussion and note interface",
      githubPoster:
        "MeshWork English product poster showing GitHub-based knowledge sharing",
      graphPoster:
        "MeshWork English product poster showing discussions becoming a knowledge graph",
    },
  },
};

const html = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const imageNodes = document.querySelectorAll("[data-image-key]");
const languageKey = "meshwork-site-language";
let currentLanguage = browserPreferredLanguage();

function resolvePath(dictionary, path) {
  return path.split(".").reduce((value, key) => value?.[key], dictionary) ?? "";
}

function browserPreferredLanguage() {
  try {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    return languages.some((language) =>
      language?.toLowerCase().startsWith("zh"),
    )
      ? "zh"
      : "en";
  } catch {
    return "en";
  }
}

function normalizedLanguage(language) {
  return language === "zh" ? "zh" : "en";
}

function setLanguage(language, options = {}) {
  const normalized = normalizedLanguage(language);
  const dictionary = content[normalized];
  currentLanguage = normalized;
  if (options.persist) {
    localStorage.setItem(languageKey, normalized);
  }
  html.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = dictionary.metaTitle;
  metaDescription.setAttribute("content", dictionary.metaDescription);

  translatableNodes.forEach((node) => {
    node.textContent = resolvePath(dictionary, node.dataset.i18n);
  });

  imageNodes.forEach((image) => {
    const key = image.dataset.imageKey;
    image.src = dictionary.images[key];
    image.alt = dictionary.alt[key];
  });

  document.querySelectorAll("source[data-src-zh]").forEach((source) => {
    source.srcset = source.dataset[normalized === "zh" ? "srcZh" : "srcEn"];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === normalized);
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === normalized),
    );
  });

  // Update manual links to point to the correct language version
  document.querySelectorAll('a[href^="manual"]').forEach((link) => {
    const currentHref = link.getAttribute("href");
    if (normalized === "en") {
      // Change to English version
      link.setAttribute("href", currentHref.replace("manual.html", "manual-en.html"));
    } else {
      // Change to Chinese version
      link.setAttribute("href", currentHref.replace("manual-en.html", "manual.html"));
    }
  });

  // Update knowledge tools grid
  const toolsGrid = document.querySelector(".highlight-tools-grid");
  if (toolsGrid) {
    const tools = dictionary.highlights.knowledgeTools.tools;
    toolsGrid.innerHTML = tools.map(tool => `
      <div class="highlight-tool-item">
        <code>${tool.name}</code>
        <span>${tool.desc}</span>
      </div>
    `).join("");
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () =>
    setLanguage(button.dataset.lang, { persist: true }),
  );
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((node) => revealObserver.observe(node));

const canvas = document.querySelector(".starfield");
const context = canvas.getContext("2d");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let stars = [];
let animationFrame = 0;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from(
    { length: Math.min(150, Math.floor(window.innerWidth / 9)) },
    () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.24 + 0.04,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.55 ? "255, 117, 202" : "255, 210, 150",
    }),
  );
}

function drawStars(time = 0) {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  stars.forEach((star) => {
    const alpha = 0.32 + Math.sin(time * 0.0016 + star.phase) * 0.24;
    context.beginPath();
    context.fillStyle = `rgba(${star.hue}, ${Math.max(0.12, alpha)})`;
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fill();

    if (!reduceMotion) {
      star.y += star.speed;
      if (star.y > window.innerHeight + 6) {
        star.y = -6;
        star.x = Math.random() * window.innerWidth;
      }
    }
  });

  if (!reduceMotion) {
    animationFrame = requestAnimationFrame(drawStars);
  }
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  drawStars();
});

resizeCanvas();
drawStars();
setLanguage(currentLanguage);
