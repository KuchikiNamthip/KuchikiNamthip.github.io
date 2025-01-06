// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my research projects and computational biology portfolios.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-มิสหอบหืด-miss-asthma-thailand",
      
        title: 'มิสหอบหืด - MISS ASTHMA THAILAND <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/", "_blank");
        
      },
    },{id: "post-screen-command-to-maintain-terminal-screen-unix-trick",
      
        title: "Screen command to Maintain Terminal Screen - [Unix trick]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/CompUnix1_Screen/";
        
      },
    },{id: "post-tracking-verions-of-code-by-git-version-control-proj-my-computer-workbench",
      
        title: "Tracking verions of code by Git Version Control - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp5_Git/";
        
      },
    },{id: "post-popular-computational-biology-language-with-r-proj-my-computer-workbench",
      
        title: "Popular Computational Biology Language with R - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp4_R/";
        
      },
    },{id: "post-reproducible-computational-biology-workflow-by-nf-core-proj-my-computer-workbench",
      
        title: "Reproducible Computational Biology Workflow by nf-core - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp3_nf/";
        
      },
    },{id: "post-containerization-using-docker-proj-my-computer-workbench",
      
        title: "Containerization using Docker - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp2_Docker/";
        
      },
    },{id: "post-operating-system-using-linux-proj-my-computer-workbench",
      
        title: "Operating System using Linux - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp1_OS/";
        
      },
    },{id: "post-what-are-go-msigdb-kegg-ora-and-gsea",
      
        title: "What are GO, MSigDB, KEGG, ORA, and GSEA?",
      
      description: "What are those terms in transcriptomics analysis?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/msigDB_ORA_GSEA/";
        
      },
    },{id: "news-my-combio-portfolio-my-computer-workbench-format-changes-smile-easy-to-read",
          title: 'My ComBio Portfolio: My Computer Workbench  format changes :smile: easy to read!',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-transcriptome-is-recently-updated-sparkles-sparkles",
          title: 'My ComBio Portfolio: Transcriptome  is recently updated :sparkles: :sparkles:',
          description: "",
          section: "News",},{id: "projects-cholangiocarcinoma-stem-cell",
          title: 'Cholangiocarcinoma Stem Cell',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CSC/";
            },},{id: "projects-computer-workbench-setting",
          title: 'Computer Workbench Setting',
          description: "How my computers are set up with reproducibility in mind.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ComSetting/";
            },},{id: "projects-transcriptomics",
          title: 'Transcriptomics',
          description: "My transcriptomics portfolio :)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Transcriptome/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6B%72%69%74%74%69%79%61%62%68%6F%72%6E@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/kuchiki.namthip", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KuchikiNamthip", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kuchikinamthip", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@kuchikinamthip", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-9689-2552", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Krittiyabhorn-Kongtanawanich/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.co.th/citations?user=afWylV4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.sisyspharm.org/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KuchikiNamthip", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
