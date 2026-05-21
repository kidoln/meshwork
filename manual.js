const manualContent = {
  zh: {
    metaTitle: "MeshWork 操作手册",
    metaDescription:
      "MeshWork 操作手册：了解私有知识库、共享空间、讨论区、AI 协作和 Git 共享的基本使用方式。",
    nav: {
      start: "快速开始",
      library: "知识库",
      discussion: "讨论",
      commands: "对话命令",
      sharing: "共享",
    },
    hero: {
      kicker: "User Manual",
      title: "MeshWork 操作手册",
      body:
        "MeshWork 是围绕笔记、讨论、AI 与 Git 共享构建的创作工作台。它的使用方式不是先创建一个大型在线团队空间，而是先建立自己的私有知识库，再按需加入共享空间，与团队和 AI 一起把讨论沉淀为长期知识。",
    },
    start: {
      title: "快速开始",
      heading: "首次打开应用",
      stepOne: "选择或创建一个私有知识库。这里存放你自己的长期笔记、草稿、资料和未公开想法。",
      stepTwo: "进入主工作台。默认会先打开私有知识库，因为它是最稳定的个人入口。",
      stepThree: "需要团队协作时，再创建或导入共享空间。共享空间可以稍后再配置 Git。",
      tip: "不需要一开始就配置远程仓库。MeshWork 的设计原则是先让你开始写作和整理，再逐步打开共享能力。",
    },
    library: {
      title: "私有知识库与共享空间",
      privateTitle: "私有知识库",
      privateBody:
        "私有知识库属于当前用户自己，不从属于任何团队或项目。适合保存个人笔记、研究资料、写作草稿、灵感片段和不应自动进入团队共享的内容。",
      privatePointOne: "默认长期存在",
      privatePointTwo: "可以不启用远程 Git",
      privatePointThree: "可作为多个共享空间的私有参考素材",
      sharedTitle: "共享空间",
      sharedBody:
        "共享空间是团队或项目的数据边界。每个共享空间包含公共知识库、讨论区和共享附件，也可以拥有自己的 Git 历史。",
      sharedPointOne: "公共知识库沉淀团队文档",
      sharedPointTwo: "讨论区围绕材料进行异步协作",
      sharedPointThree: "每个共享空间独立配置同步边界",
    },
    discussion: {
      title: "讨论与 AI 协作",
      heading: "从材料发起讨论",
      body:
        "你可以围绕一个文档、一个片段或一个主题创建讨论。讨论更接近论坛或邮件列表的节奏，适合深度思考，而不是追求即时聊天的速度。",
      stepOneTitle: "提出问题",
      stepOneBody: "把待讨论的材料、背景和目标放进话题。",
      stepTwoTitle: "邀请 AI",
      stepTwoBody: "让 AI 总结、补充视角、分析分歧或提出下一步。",
      stepThreeTitle: "沉淀结论",
      stepThreeBody: "把确认后的共识保存回公共知识库或个人笔记。",
      aiBoundary: "AI 在 MeshWork 中是参与者，而不是自动替代创作者的主体。它可以提出建议，但不会未经确认直接修改你的文档。",
      tip:
        "操作细节：当你在讨论中 @ 一个智能体并让它回答后，接下来的两分钟内，你继续发送的消息不需要再次 @ 它。这个智能体会自动跟进并回复，适合连续追问、补充背景或要求它展开上一轮回答。",
    },
    commands: {
      title: "智能对话命令系统",
      heading: "三种对话增强命令",
      body: "MeshWork 的讨论区支持三类预定义命令，让对话更高效、与知识库连接更紧密。",
      atTitle: "@ 提及命令",
      atBody: "使用 @ 符号可以提及智能体或其他对话参与者，让他们参与到当前对话中。",
      atExampleOne: "邀请 Claude 智能体参与对话",
      atExampleTwo: "提及团队成员张三",
      atTip: "提及智能体后，两分钟内的后续消息会自动发送给该智能体，无需重复 @。",
      hashTitle: "# 文件引用",
      hashBody: "使用 # 符号可以直接引用知识库中的文档内容，让 AI 能够基于具体材料进行分析和讨论。",
      hashExampleOne: "引用「产品设计」文档",
      hashExampleTwo: "引用子目录中的文档",
      hashTip: "引用文件时，支持自动补全。输入 # 后会弹出匹配的文件列表供选择。",
      slashTitle: "/ 自定义命令",
      slashBody: "使用 / 符号触发预定义的自定义命令，快速执行常见操作或调用特定功能。",
      slashExampleOne: "总结当前讨论内容",
      slashExampleTwo: "提取待办事项",
      slashExampleThree: "使用预设模板回复",
      slashTip: "自定义命令可以在设置中配置，创建符合团队工作流程的快捷操作。",
      comboHeading: "组合使用技巧",
      comboBody: "三种命令可以组合使用，创建更丰富的对话场景：",
      comboPointOne: "@claude 请分析 #产品需求 文档中的技术可行性",
      comboPointTwo: "@产品经理 #设计稿 #原型 基于 #竞品分析 给出建议",
      comboPointThree: "/summarize 并 @全体成员 确认下一步行动计划",
    },
    sharing: {
      title: "Git 与 GitHub 共享",
      heading: "把 Git 当成隐藏的可靠底座",
      body:
        "MeshWork 使用 Git 承载版本历史、修改追踪、协作共享和恢复能力。你不需要在日常使用中理解 commit、branch、merge 等概念。",
      pointOne: "个人内容保存在私有知识库自己的边界内。",
      pointTwo: "团队内容保存在对应共享空间自己的边界内。",
      pointThree: "如果需要通过 GitHub 分享，再为对应资源配置远程仓库。",
      pointFour: "共享前确认哪些内容进入公共知识库，哪些仍留在私有知识库。",
      branchHeading: "用远端分支区分不同知识库",
      branchBody:
        "MeshWork 允许同类资源共用同一个远端仓库，但不会把多个知识库写进同一条历史线。每个私有知识库或共享空间都会绑定到这个远端仓库中的一个独立分支，用分支来隔离不同知识库的数据。",
      branchOneTitle: "同类资源可以共用远端",
      branchOneBody:
        "多个私有知识库可以使用同一个远端仓库，多个共享空间也可以使用同一个远端仓库，只要它们使用不同分支。",
      branchTwoTitle: "每个资源对应一个分支",
      branchTwoBody:
        "分支留空时，MeshWork 会根据资源类型、名称和 ID 自动生成分支名，避免不同知识库互相覆盖。",
      branchThreeTitle: "不同类型资源不混用",
      branchThreeBody:
        "一个远端仓库如果已经被私有知识库使用，就不会再作为共享空间的绑定目标；反过来也一样。",
      branchSummary:
        "这意味着你可以把一个远端仓库理解成“某一类知识库的远端容器”，而具体的知识库由分支区分。同步时，MeshWork 只会拉取和推送当前资源绑定的那个分支。",
      tip:
        "工作台本身不是 Git 仓库。Git 只绑定真实数据边界：私有知识库，或某一个共享空间。远端仓库负责承载这些边界，分支负责区分同类资源下的不同知识库。",
    },
    workflow: {
      title: "推荐工作流",
      stepOne: "收集资料",
      stepTwo: "整理笔记",
      stepThree: "发起讨论",
      stepFour: "AI 辅助分析",
      stepFive: "确认结论",
      stepSix: "沉淀为文档",
      body:
        "对个人创作者来说，MeshWork 可以作为长期知识库和写作工作室。对小团队来说，它更适合产品策划、内容创作、研究讨论、世界观设定和项目复盘。",
    },
    footer: {
      home: "返回首页",
      privacy: "隐私政策",
    },
  },
  en: {
    metaTitle: "MeshWork User Manual",
    metaDescription:
      "MeshWork user manual: learn the basics of private libraries, shared spaces, discussions, AI collaboration, and Git sharing.",
    nav: {
      start: "Start",
      library: "Libraries",
      discussion: "Discussion",
      commands: "Commands",
      sharing: "Sharing",
    },
    hero: {
      kicker: "User Manual",
      title: "MeshWork User Manual",
      body:
        "MeshWork is a creative workspace built around notes, discussion, AI, and Git-based sharing. You do not start by creating a large online team space. You start with your own private library, then join shared spaces when needed and turn team and AI discussion into durable knowledge.",
    },
    start: {
      title: "Quick Start",
      heading: "First launch",
      stepOne: "Choose or create a private library. This is where your long-term notes, drafts, references, and unpublished ideas live.",
      stepTwo: "Enter the main workbench. MeshWork opens the private library first because it is the most stable personal entry point.",
      stepThree: "When collaboration is needed, create or import a shared space. Git can be configured later.",
      tip: "You do not need to configure a remote repository immediately. MeshWork is designed to let you start writing and organizing first, then open sharing capabilities step by step.",
    },
    library: {
      title: "Private Libraries and Shared Spaces",
      privateTitle: "Private library",
      privateBody:
        "A private library belongs to the current user and does not belong to any team or project. Use it for personal notes, research material, drafts, idea fragments, and anything that should not automatically enter team sharing.",
      privatePointOne: "Exists as your long-term default space",
      privatePointTwo: "Can work without remote Git",
      privatePointThree: "Can provide private reference material for multiple shared spaces",
      sharedTitle: "Shared space",
      sharedBody:
        "A shared space is the data boundary for a team or project. Each shared space contains a public knowledge base, discussions, shared attachments, and optionally its own Git history.",
      sharedPointOne: "The public knowledge base preserves team documents",
      sharedPointTwo: "Discussions support asynchronous collaboration around source material",
      sharedPointThree: "Each shared space keeps its own sync boundary",
    },
    discussion: {
      title: "Discussion and AI Collaboration",
      heading: "Start discussion from source material",
      body:
        "You can create a discussion around a document, a fragment, or a topic. Discussions follow a forum or mailing-list rhythm, which is better for deeper thinking than chasing real-time chat speed.",
      stepOneTitle: "Ask the question",
      stepOneBody: "Put the material, context, and goal into the topic.",
      stepTwoTitle: "Invite AI",
      stepTwoBody: "Ask AI to summarize, add perspectives, analyze disagreements, or propose next steps.",
      stepThreeTitle: "Preserve conclusions",
      stepThreeBody: "Save confirmed alignment back into the public knowledge base or personal notes.",
      aiBoundary: "In MeshWork, AI is a participant rather than an automatic replacement for the creator. It can suggest changes, but it does not modify your documents directly without confirmation.",
      tip:
        "Usage detail: after you mention an agent in a discussion and ask it to answer, messages you send during the next two minutes do not need to mention it again. That agent will continue following the thread and replying, which is useful for follow-up questions, added context, or asking it to expand on the previous answer.",
    },
    commands: {
      title: "Smart Conversation Commands",
      heading: "Three types of conversation enhancement commands",
      body: "MeshWork discussion area supports three types of predefined commands, making conversations more efficient and closely connected with the knowledge base.",
      atTitle: "@ Mention Command",
      atBody: "Use the @ symbol to mention AI agents or other conversation participants, inviting them to join the current conversation.",
      atExampleOne: "Invite Claude agent to join the conversation",
      atExampleTwo: "Mention team member Zhang San",
      atTip: "After mentioning an agent, subsequent messages within two minutes will be automatically sent to that agent without needing to @ again.",
      hashTitle: "# File Reference",
      hashBody: "Use the # symbol to directly reference document content from the knowledge base, enabling AI to analyze and discuss based on specific materials.",
      hashExampleOne: "Reference the 'Product Design' document",
      hashExampleTwo: "Reference documents in subdirectories",
      hashTip: "When referencing files, auto-completion is supported. After typing #, a list of matching files will appear for selection.",
      slashTitle: "/ Custom Commands",
      slashBody: "Use the / symbol to trigger predefined custom commands for quick execution of common operations or specific functions.",
      slashExampleOne: "Summarize current discussion content",
      slashExampleTwo: "Extract action items",
      slashExampleThree: "Reply using preset template",
      slashTip: "Custom commands can be configured in settings to create shortcuts that fit your team's workflow.",
      comboHeading: "Combination Usage Tips",
      comboBody: "The three command types can be combined to create richer conversation scenarios:",
      comboPointOne: "@claude Please analyze the technical feasibility in the #ProductRequirements document",
      comboPointTwo: "@ProductManager #DesignMockup #Prototype Provide suggestions based on #CompetitorAnalysis",
      comboPointThree: "/summarize and @all confirm next action plan",
    },
    sharing: {
      title: "Git and GitHub Sharing",
      heading: "Treat Git as a reliable hidden foundation",
      body:
        "MeshWork uses Git for version history, change tracking, collaborative sharing, and recovery. In everyday use, you do not need to understand commits, branches, or merges.",
      pointOne: "Personal content stays inside the boundary of its private library.",
      pointTwo: "Team content stays inside the boundary of its shared space.",
      pointThree: "If you need to share through GitHub, configure a remote repository for the corresponding resource.",
      pointFour: "Before sharing, confirm what belongs in the public knowledge base and what should remain private.",
      branchHeading: "Use remote branches to separate libraries",
      branchBody:
        "MeshWork allows resources of the same type to share one remote repository, but it does not write multiple libraries into the same history line. Each private library or shared space binds to an independent branch in that remote repository, and the branch isolates that library's data.",
      branchOneTitle: "Same-type resources can share a remote",
      branchOneBody:
        "Multiple private libraries can use one remote repository, and multiple shared spaces can use one remote repository, as long as they use different branches.",
      branchTwoTitle: "Each resource maps to one branch",
      branchTwoBody:
        "When the branch is left blank, MeshWork generates a branch name from the resource type, name, and ID to prevent libraries from overwriting each other.",
      branchThreeTitle: "Different resource types do not mix",
      branchThreeBody:
        "If a remote repository is already used by a private library, it will not also be used as a shared-space target, and vice versa.",
      branchSummary:
        "This means you can treat a remote repository as a remote container for one category of libraries, while individual libraries are separated by branches. During sync, MeshWork only pulls and pushes the branch bound to the current resource.",
      tip:
        "The workbench itself is not a Git repository. Git binds only to real data boundaries: a private library, or one shared space. Remote repositories carry those boundaries, and branches separate individual libraries within the same resource type.",
    },
    workflow: {
      title: "Recommended Workflow",
      stepOne: "Collect material",
      stepTwo: "Organize notes",
      stepThree: "Start discussion",
      stepFour: "Analyze with AI",
      stepFive: "Confirm conclusions",
      stepSix: "Preserve as documents",
      body:
        "For individual creators, MeshWork can serve as a long-term knowledge base and writing studio. For small teams, it fits product planning, content creation, research discussion, worldbuilding, and project retrospectives.",
    },
    footer: {
      home: "Back to home",
      privacy: "Privacy Policy",
    },
  },
};

const languageKey = "meshwork-site-language";
const html = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const translatableNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll("[data-lang]");
const queryLanguage = new URLSearchParams(window.location.search).get("lang");

function resolvePath(dictionary, path) {
  return path.split(".").reduce((value, key) => value?.[key], dictionary) ?? "";
}

function normalizedLanguage(language) {
  return language === "zh" ? "zh" : "en";
}

function browserPreferredLanguage() {
  try {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    return languages.some((language) => language?.toLowerCase().startsWith("zh")) ? "zh" : "en";
  } catch {
    return "en";
  }
}

function setLanguage(language, options = {}) {
  const normalized = normalizedLanguage(language);
  const dictionary = manualContent[normalized];

  if (options.persist) {
    localStorage.setItem(languageKey, normalized);
  }
  html.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = dictionary.metaTitle;
  metaDescription.setAttribute("content", dictionary.metaDescription);

  translatableNodes.forEach((node) => {
    node.textContent = resolvePath(dictionary, node.dataset.i18n);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === normalized);
    button.setAttribute("aria-pressed", String(button.dataset.lang === normalized));
  });

  if (options.updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", normalized);
    window.history.replaceState({}, "", url);
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang, { persist: true, updateUrl: true }));
});

setLanguage(queryLanguage || browserPreferredLanguage());
