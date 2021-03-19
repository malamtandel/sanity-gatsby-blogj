export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605425208889b26e78b384e5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blogj-studio",
                  apiId: "c0ccf00c-cb1d-4ad6-8108-5edae0077cc3",
                },
                {
                  buildHookId: "605425205962dc6e04543d89",
                  title: "Blog Website",
                  name: "sanity-gatsby-blogj",
                  apiId: "7a67c53c-4bbd-40a6-911f-99ab809ecd27",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/malamtandel/sanity-gatsby-blogj",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blogj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
