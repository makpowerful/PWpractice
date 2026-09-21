# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: newWindow.spec.ts >> test right click
- Location: tests\newWindow.spec.ts:71:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: browserContext.waitForEvent: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [active] [ref=f91e1]:
  - generic [ref=f91e2]:
    - banner [ref=f91e3]:
      - generic [ref=f91e7]:
        - generic:
          - generic:
            - generic:
              - button [ref=f91e8] [cursor=pointer]
              - textbox "Search..." [ref=f91e9]
          - link "pinterest" [ref=f91e10] [cursor=pointer]:
            - /url: https://in.pinterest.com/globalsqa/
          - link "twitter" [ref=f91e11] [cursor=pointer]:
            - /url: https://twitter.com/Global_SQA
          - link "linkedin" [ref=f91e12] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/globalsqa
          - link "google" [ref=f91e13] [cursor=pointer]:
            - /url: https://plus.google.com/103761557396023531439/posts
          - link "facebook" [ref=f91e14] [cursor=pointer]:
            - /url: https://facebook.com/globalsqa
          - generic [ref=f91e15]: contact@globalsqa.com
      - generic [ref=f91e19]:
        - link [ref=f91e22] [cursor=pointer]:
          - /url: https://www.globalsqa.com/
          - img "GlobalSQA" [ref=f91e23]
        - generic [ref=f91e24]:
          - list:
            - listitem [ref=f91e25]:
              - link "About" [ref=f91e26] [cursor=pointer]:
                - /url: https://www.globalsqa.com/about/
            - listitem [ref=f91e27]:
              - link "CheatSheets" [ref=f91e28] [cursor=pointer]:
                - /url: https://www.globalsqa.com/cheatsheets/
            - listitem [ref=f91e29]:
              - link "Free Ebooks" [ref=f91e30] [cursor=pointer]:
                - /url: https://www.globalsqa.com/free-ebooks/
            - listitem [ref=f91e32]:
              - link "Tester’s Hub" [ref=f91e33] [cursor=pointer]:
                - /url: https://www.globalsqa.com/testers-hub/
              - text:  
            - listitem [ref=f91e35]:
              - link "Contact Us" [ref=f91e36] [cursor=pointer]:
                - /url: https://www.globalsqa.com/contact-us/
      - text:    
    - generic [ref=f91e37]:
      - generic [ref=f91e41]:
        - generic [ref=f91e42]:
          - link "Home" [ref=f91e43] [cursor=pointer]:
            - /url: https://www.globalsqa.com/
          - link "About" [ref=f91e45] [cursor=pointer]:
            - /url: https://www.globalsqa.com/about/
        - heading "About" [level=1] [ref=f91e48]
      - insertion [ref=f91e50]:
        - iframe [ref=f91e52]:
          - generic [ref=f94e1]:
            - generic [ref=f94e6]:
              - generic [ref=f94e7]:
                - generic "CrowdStrike®" [ref=f94e9]:
                  - link "Get the Complete Guide" [ref=f94e10] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Chv85ec6wavu3IJnIr7wPnIm28QXe5cfmiAHWz-fS7xSG7MKH9kEQASCn5pMjYOXK5YO0DqABhLur_ALIAQGoAwHIA8sEqgTpAU_QAFZ75ZZ1jf3pG_A1g6wgYuPsyS3GIMU25rC7Dt485zAyxiLgMa21iNWDlozJ6EOWQ0kuqlMT3NFkT4zxH4fdfN0plqh7RXNZrdSqnEALQsmmwp0hzJXcOGiyaLCrHx-f9Mj7J8rcxh5tmKNRvTnXJsRoCNk5fv2I-61PKdBnmGg0PCxldMJpR1yfFruBlWwI1yUqkWNjJoOyA6mV6F38QIhm2Jb3x27PArDqe1B43hhcXB1B4BXXzKAWPis_RaZKKbFLH9nCk8Gsg_9BfveLeNE1FZP-ICN62xEW5K8dA-FZbCU9xF1hwASe8pP4rAWIBYuy3LRQgAeBtJ-xAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYsfS11IX_lgNgAbEJiAUCxWYOdXmACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiv3rfUhf-WAxUZ5IsBHZyELV7wDQKIDgnYEw2IFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE&num=1&cid=CAQS9AEAQM4h3FlOsXCgy4Y9Q6smGlA1IRGOOEnIVUqJWtrUH2R-gSxim2GoOjuCvtMOfQW41VZvTmzH6lusss_T6UI5Ti1geoEv9rQH8wgt5hq_qIsBLzNYfzNf5gx8EygBj9OtCTlpDQjRnPgY8wkA6QZ-nF5OPeuZqbiGqgGKuMwEpEgMIcAZdSJmQm1TgqsHBU4XZtrVQYBhAAFO0PCCuzX2isV7k3GINLmglmqwox5sPlFhHvvDhv0yPiHX_w3W9Ky_IR446R4ti0EDRWa8b3qqOMfFvJ0M0UErsVBAwreJflrb_uaLRUefVtm0hRBC75mKdG34GAE&sig=AOD64_3CDaJwXulIw4v_etQ56k-LrLnQLQ&client=ca-pub-2878895907861435&rf=1&nb=0&adurl=https://go.crowdstrike.com/white-papers-complete-guide-to-next-gen-identity-security.html%3Futm_source%3Dgoog%26utm_medium%3Ddis%26utm_campaign%3Didp%26utm_term%3Dpsp_ci_itdm%26utm_language%3Den-au%26utm_content%3Dcrwd-core-apj-ind-en-psp-itdm-egid-cgid-rda_v1_c1_x-uids-2025%26cq_plac%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D21585402123%26gclid%3DEAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE
                - generic [ref=f94e11]:
                  - link "Highlights the Most Significant Events & Trends in the Past Year of Cyberthreat Activity." [ref=f94e13] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Chv85ec6wavu3IJnIr7wPnIm28QXe5cfmiAHWz-fS7xSG7MKH9kEQASCn5pMjYOXK5YO0DqABhLur_ALIAQGoAwHIA8sEqgTpAU_QAFZ75ZZ1jf3pG_A1g6wgYuPsyS3GIMU25rC7Dt485zAyxiLgMa21iNWDlozJ6EOWQ0kuqlMT3NFkT4zxH4fdfN0plqh7RXNZrdSqnEALQsmmwp0hzJXcOGiyaLCrHx-f9Mj7J8rcxh5tmKNRvTnXJsRoCNk5fv2I-61PKdBnmGg0PCxldMJpR1yfFruBlWwI1yUqkWNjJoOyA6mV6F38QIhm2Jb3x27PArDqe1B43hhcXB1B4BXXzKAWPis_RaZKKbFLH9nCk8Gsg_9BfveLeNE1FZP-ICN62xEW5K8dA-FZbCU9xF1hwASe8pP4rAWIBYuy3LRQgAeBtJ-xAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYsfS11IX_lgNgAbEJiAUCxWYOdXmACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiv3rfUhf-WAxUZ5IsBHZyELV7wDQKIDgnYEw2IFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE&num=1&cid=CAQS9AEAQM4h3FlOsXCgy4Y9Q6smGlA1IRGOOEnIVUqJWtrUH2R-gSxim2GoOjuCvtMOfQW41VZvTmzH6lusss_T6UI5Ti1geoEv9rQH8wgt5hq_qIsBLzNYfzNf5gx8EygBj9OtCTlpDQjRnPgY8wkA6QZ-nF5OPeuZqbiGqgGKuMwEpEgMIcAZdSJmQm1TgqsHBU4XZtrVQYBhAAFO0PCCuzX2isV7k3GINLmglmqwox5sPlFhHvvDhv0yPiHX_w3W9Ky_IR446R4ti0EDRWa8b3qqOMfFvJ0M0UErsVBAwreJflrb_uaLRUefVtm0hRBC75mKdG34GAE&sig=AOD64_3CDaJwXulIw4v_etQ56k-LrLnQLQ&client=ca-pub-2878895907861435&rf=1&nb=7&adurl=https://go.crowdstrike.com/white-papers-complete-guide-to-next-gen-identity-security.html%3Futm_source%3Dgoog%26utm_medium%3Ddis%26utm_campaign%3Didp%26utm_term%3Dpsp_ci_itdm%26utm_language%3Den-au%26utm_content%3Dcrwd-core-apj-ind-en-psp-itdm-egid-cgid-rda_v1_c1_x-uids-2025%26cq_plac%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D21585402123%26gclid%3DEAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE
                  - link [ref=f94e14] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Chv85ec6wavu3IJnIr7wPnIm28QXe5cfmiAHWz-fS7xSG7MKH9kEQASCn5pMjYOXK5YO0DqABhLur_ALIAQGoAwHIA8sEqgTpAU_QAFZ75ZZ1jf3pG_A1g6wgYuPsyS3GIMU25rC7Dt485zAyxiLgMa21iNWDlozJ6EOWQ0kuqlMT3NFkT4zxH4fdfN0plqh7RXNZrdSqnEALQsmmwp0hzJXcOGiyaLCrHx-f9Mj7J8rcxh5tmKNRvTnXJsRoCNk5fv2I-61PKdBnmGg0PCxldMJpR1yfFruBlWwI1yUqkWNjJoOyA6mV6F38QIhm2Jb3x27PArDqe1B43hhcXB1B4BXXzKAWPis_RaZKKbFLH9nCk8Gsg_9BfveLeNE1FZP-ICN62xEW5K8dA-FZbCU9xF1hwASe8pP4rAWIBYuy3LRQgAeBtJ-xAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYsfS11IX_lgNgAbEJiAUCxWYOdXmACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiv3rfUhf-WAxUZ5IsBHZyELV7wDQKIDgnYEw2IFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE&num=1&cid=CAQS9AEAQM4h3FlOsXCgy4Y9Q6smGlA1IRGOOEnIVUqJWtrUH2R-gSxim2GoOjuCvtMOfQW41VZvTmzH6lusss_T6UI5Ti1geoEv9rQH8wgt5hq_qIsBLzNYfzNf5gx8EygBj9OtCTlpDQjRnPgY8wkA6QZ-nF5OPeuZqbiGqgGKuMwEpEgMIcAZdSJmQm1TgqsHBU4XZtrVQYBhAAFO0PCCuzX2isV7k3GINLmglmqwox5sPlFhHvvDhv0yPiHX_w3W9Ky_IR446R4ti0EDRWa8b3qqOMfFvJ0M0UErsVBAwreJflrb_uaLRUefVtm0hRBC75mKdG34GAE&sig=AOD64_3CDaJwXulIw4v_etQ56k-LrLnQLQ&client=ca-pub-2878895907861435&rf=1&nb=8&adurl=https://go.crowdstrike.com/white-papers-complete-guide-to-next-gen-identity-security.html%3Futm_source%3Dgoog%26utm_medium%3Ddis%26utm_campaign%3Didp%26utm_term%3Dpsp_ci_itdm%26utm_language%3Den-au%26utm_content%3Dcrwd-core-apj-ind-en-psp-itdm-egid-cgid-rda_v1_c1_x-uids-2025%26cq_plac%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D21585402123%26gclid%3DEAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE
              - generic "CrowdStrike®" [ref=f94e17]:
                - link "CrowdStrike®" [ref=f94e18] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Chv85ec6wavu3IJnIr7wPnIm28QXe5cfmiAHWz-fS7xSG7MKH9kEQASCn5pMjYOXK5YO0DqABhLur_ALIAQGoAwHIA8sEqgTpAU_QAFZ75ZZ1jf3pG_A1g6wgYuPsyS3GIMU25rC7Dt485zAyxiLgMa21iNWDlozJ6EOWQ0kuqlMT3NFkT4zxH4fdfN0plqh7RXNZrdSqnEALQsmmwp0hzJXcOGiyaLCrHx-f9Mj7J8rcxh5tmKNRvTnXJsRoCNk5fv2I-61PKdBnmGg0PCxldMJpR1yfFruBlWwI1yUqkWNjJoOyA6mV6F38QIhm2Jb3x27PArDqe1B43hhcXB1B4BXXzKAWPis_RaZKKbFLH9nCk8Gsg_9BfveLeNE1FZP-ICN62xEW5K8dA-FZbCU9xF1hwASe8pP4rAWIBYuy3LRQgAeBtJ-xAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYsfS11IX_lgNgAbEJiAUCxWYOdXmACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiv3rfUhf-WAxUZ5IsBHZyELV7wDQKIDgnYEw2IFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE&num=1&cid=CAQS9AEAQM4h3FlOsXCgy4Y9Q6smGlA1IRGOOEnIVUqJWtrUH2R-gSxim2GoOjuCvtMOfQW41VZvTmzH6lusss_T6UI5Ti1geoEv9rQH8wgt5hq_qIsBLzNYfzNf5gx8EygBj9OtCTlpDQjRnPgY8wkA6QZ-nF5OPeuZqbiGqgGKuMwEpEgMIcAZdSJmQm1TgqsHBU4XZtrVQYBhAAFO0PCCuzX2isV7k3GINLmglmqwox5sPlFhHvvDhv0yPiHX_w3W9Ky_IR446R4ti0EDRWa8b3qqOMfFvJ0M0UErsVBAwreJflrb_uaLRUefVtm0hRBC75mKdG34GAE&sig=AOD64_3CDaJwXulIw4v_etQ56k-LrLnQLQ&client=ca-pub-2878895907861435&rf=1&nb=1&adurl=https://go.crowdstrike.com/white-papers-complete-guide-to-next-gen-identity-security.html%3Futm_source%3Dgoog%26utm_medium%3Ddis%26utm_campaign%3Didp%26utm_term%3Dpsp_ci_itdm%26utm_language%3Den-au%26utm_content%3Dcrwd-core-apj-ind-en-psp-itdm-egid-cgid-rda_v1_c1_x-uids-2025%26cq_plac%3Dwww.globalsqa.com%26gad_source%3D5%26gad_campaignid%3D21585402123%26gclid%3DEAIaIQobChMIu9i31IX_lgMVGeSLAR2chC1eEAEYASAAEgKCc_D_BwE
            - generic [ref=f94e19] [cursor=pointer]
            - button [ref=f94e24] [cursor=pointer]
            - iframe
      - generic [ref=f91e57]:
        - generic [ref=f91e59]:
          - generic [ref=f91e60]:
            - heading "About Me" [level=2] [ref=f91e70]
            - heading "My Story" [level=2] [ref=f91e73]
            - heading "The best way to predict the future is to invent it - Alan Kay" [level=2] [ref=f91e76]
            - generic [ref=f91e78]:
              - paragraph [ref=f91e79]: This quote perfectly encapsulates my approach to technology. I’m Raghav Arora, and I’ve been a passionate tech advocate since the dawn of my career. While I’ve donned many hats – developer, project manager, automation whiz – my core interests have always revolved around automation and the ever-evolving world of AI.
              - paragraph [ref=f91e80]: In 2014, this passion fueled the creation of GlobalSQA, a one-stop shop for consulting and training needs. But my drive to innovate extends far beyond the walls of GlobalSQA.
          - generic [ref=f91e81]:
            - img "Raghav Arora" [ref=f91e84]
            - heading "|" [level=3] [ref=f91e87]
        - generic [ref=f91e90]:
          - heading "Building to Make a Difference" [level=2] [ref=f91e94]
          - generic [ref=f91e95]:
            - generic [ref=f91e98]:
              - paragraph [ref=f91e99]: "I’m a firm believer in the power of technology to solve real-world problems. This philosophy has led me to:"
              - list [ref=f91e100]:
                - listitem [level=1] [ref=f91e101]: Author several books, sharing my knowledge with aspiring automation experts. They are still available on Amazon for free but haven’t been updated from quite a while. So, don’t expect content to be as per current market
                - listitem [level=1] [ref=f91e102]:
                  - generic [ref=f91e103]:
                    - text: Developed a
                    - link "website" [ref=f91e104] [cursor=pointer]:
                      - /url: https://web.archive.org/web/20201230003301/https://asxalert.com/
                    - text: i.e. asxalert.com dedicated to keep investors informed about any announcement by a company (listed on Australian Stock Exchange). This website gained 3000 free subscribers and approx. 350 paid subscriber. However, due to legal notice from ASX on licensing, I had to shut down the website.
                - listitem [level=1] [ref=f91e105]:
                  - generic [ref=f91e106]:
                    - text: Developed “
                    - link "CoinControl" [ref=f91e107] [cursor=pointer]:
                      - /url: https://www.amazon.com/Coin-Control-Bitcoin-Coins-Price/dp/B079GM6W3L/ref=cm_cr_arp_d_product_top?ie=UTF8
                    - text: ",” an Android app and “"
                    - link "Best Wishes" [ref=f91e108] [cursor=pointer]:
                      - /url: https://www.amazon.com/GlobalSQA-Best-Wishes/dp/B074CKKMWR
                    - text: ",” an Alexa skill as my side project to gain programming knowledge and stay up to date with the market."
                - listitem [level=1] [ref=f91e109]: Developed lot of custom web scrapers, crawlers and bots for SMEs / Startups, streamlining data collection.
                - listitem [level=1] [ref=f91e110]: Delivered corporate training to over 50 companies, impacting over 5,000 students online on various programming and automation topics/tools.
            - heading "The Jour |" [level=3] [ref=f91e113]:
              - text: The
              - generic [ref=f91e114]:
                - generic [ref=f91e115]: Jour
                - generic [ref=f91e117]: "|"
            - generic [ref=f91e119]:
              - paragraph [ref=f91e120]:
                - text: My biggest thrill lies in creating useful applications that make a positive impact. This drive to build a better future fuels my constant learning and exploration of new technologies. Let’s connect and discuss how automation can revolutionize your world!
                - link "Monitoring Services" [ref=f91e121] [cursor=pointer]:
                  - generic [ref=f91e122]: Monitoring
                  - text: Services
              - paragraph [ref=f91e126]: My working modes are high-level and hands-on, combined with an agile mindset to deliver high-quality, state-of-the-art solutions.
            - generic [ref=f91e129]:
              - link "Linkedin" [ref=f91e131] [cursor=pointer]:
                - /url: https://linkedin.com/in/aroraraghav
              - link "Twitter" [ref=f91e136] [cursor=pointer]:
                - /url: https://twitter.com/global_sqa
        - generic [ref=f91e141]:
          - generic [ref=f91e145]:
            - generic [ref=f91e146]:
              - article [ref=f91e147]:
                - generic [ref=f91e149]:
                  - img "IMG_20190322_155057-min" [ref=f91e151]
                  - generic [ref=f91e152]:
                    - generic [ref=f91e154] [cursor=pointer]
                    - generic [ref=f91e155]: 
              - article [ref=f91e163]:
                - generic [ref=f91e165]:
                  - img "WhatsApp Image 2024-05-12 at 8.40.52 PM" [ref=f91e167]
                  - generic [ref=f91e168]:
                    - generic [ref=f91e170] [cursor=pointer]
                    - generic [ref=f91e176]:
                      - generic [ref=f91e177] [cursor=pointer]: 
                      - generic [ref=f91e179] [cursor=pointer]
              - article [ref=f91e180]:
                - generic [ref=f91e182]:
                  - img "IMG_3741-min" [ref=f91e184]
                  - generic [ref=f91e185]:
                    - generic [ref=f91e187] [cursor=pointer]
                    - generic [ref=f91e193]:
                      - generic [ref=f91e194] [cursor=pointer]: 
                      - generic [ref=f91e196] [cursor=pointer]
              - article [ref=f91e197]:
                - generic [ref=f91e199]:
                  - img "IMG_20190125_132740-min" [ref=f91e201]
                  - generic [ref=f91e202]:
                    - generic [ref=f91e204] [cursor=pointer]
                    - generic [ref=f91e210]:
                      - generic [ref=f91e211] [cursor=pointer]: 
                      - generic [ref=f91e213] [cursor=pointer]
              - article [ref=f91e214]:
                - generic [ref=f91e216]:
                  - img "IMG_20170929_171359-min" [ref=f91e218]
                  - generic [ref=f91e219]:
                    - generic [ref=f91e221] [cursor=pointer]
                    - generic [ref=f91e227]:
                      - generic [ref=f91e228] [cursor=pointer]: 
                      - generic [ref=f91e230] [cursor=pointer]
              - article [ref=f91e231]:
                - generic [ref=f91e233]:
                  - img "IMG_20190301_164727-min" [ref=f91e235]
                  - generic [ref=f91e236]:
                    - generic [ref=f91e238] [cursor=pointer]
                    - generic [ref=f91e244]:
                      - generic [ref=f91e245] [cursor=pointer]: 
                      - generic [ref=f91e247] [cursor=pointer]
            - link "Load More" [ref=f91e249] [cursor=pointer]:
              - /url: https://www.globalsqa.com/about/page/2/
          - generic [ref=f91e251]:
            - heading "Corporate Trainings" [level=2] [ref=f91e254]
            - paragraph [ref=f91e257]: A few images showcasing corporate training delivered across different organizations
    - insertion [ref=f91e259]:
      - generic [ref=f91e262]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f91e264]: Discover more
        - link "Master Coding Skills" [ref=f91e265] [cursor=pointer]
        - link "Explore Trade Classes" [ref=f91e270] [cursor=pointer]
        - link "Download Productivity Apps" [ref=f91e275] [cursor=pointer]
    - generic [ref=f91e280]:
      - generic [ref=f91e282]:
        - generic [ref=f91e283]:
          - heading "Footer Widget Area 1" [level=3] [ref=f91e284]
          - paragraph [ref=f91e285]:
            - link "Assign a widget to this area now." [ref=f91e286] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=f91e287]:
          - heading "Footer Widget Area 2" [level=3] [ref=f91e288]
          - paragraph [ref=f91e289]:
            - link "Assign a widget to this area now." [ref=f91e290] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=f91e291]:
          - heading "Footer Widget Area 3" [level=3] [ref=f91e292]
          - paragraph [ref=f91e293]:
            - link "Assign a widget to this area now." [ref=f91e294] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=f91e295]:
          - heading "Footer Widget Area 4" [level=3] [ref=f91e296]
          - paragraph [ref=f91e297]:
            - link "Assign a widget to this area now." [ref=f91e298] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=f91e303]:
        - link "pinterest" [ref=f91e304] [cursor=pointer]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=f91e305] [cursor=pointer]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=f91e306] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=f91e307] [cursor=pointer]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=f91e308] [cursor=pointer]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=f91e309]:
          - text: "Website Designed & Developed by :"
          - link "GlobalSQA" [ref=f91e310] [cursor=pointer]:
            - /url: https://www.globalsqa.com
  - generic [ref=f91e311]: desktop
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Test new window case', async ({ page, context }) => {
  4  | 
  5  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |     // 1. Setup the asynchronous event listener gatekeeper for a new tab
  7  |     const newTabPromise = context.waitForEvent('page');
  8  | 
  9  |     // 2. Trigger the action that causes the popup window to spawn
  10 |     await page.getByRole('link', { name: 'Open Tab' }).click();
  11 | 
  12 |     // 3. Await the completed new Page object payload structure
  13 |     const newTab = await newTabPromise;
  14 | 
  15 |     // 4. Execute assertions cleanly inside the new tab scope
  16 |     await newTab.waitForLoadState('load');
  17 |     await expect(newTab).toHaveURL(/.*qaclickacademy/);
  18 |     //await newTab.getByRole('button', { name: 'Download PDF' }).click();
  19 | 
  20 |     let title = page.title();
  21 |     await console.log(title);
  22 | 
  23 |     // 5. Clean up system memory immediately!
  24 |     await newTab.close();
  25 |     await context.close();
  26 | 
  27 | });
  28 | 
  29 | test('Handle multiple tabs one by one', async ({ page, context }) => {
  30 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  31 | 
  32 |     // Setup listener for the 1st new tab, trigger it, and resolve it
  33 |     const tab1Promise = context.waitForEvent('page');
  34 |     await page.locator('#firstButton').click();
  35 |     const tab1 = await tab1Promise;
  36 | 
  37 |     // Setup listener for the 2nd new tab, trigger it, and resolve it
  38 |     const tab2Promise = context.waitForEvent('page');
  39 |     await page.locator('#secondButton').click();
  40 |     const tab2 = await tab2Promise;
  41 | 
  42 |     // You can interact with both independently now!
  43 |     console.log(await tab1.title());
  44 |     console.log(await tab2.title());
  45 | 
  46 |     await tab1.close();
  47 |     await tab2.close();
  48 | });
  49 | 
  50 | 
  51 | test('Test new window', async({page, context})=>{
  52 |     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
  53 |      // 1. Setup the listener to catch the newly spawned page window
  54 |     const newWindowPromise = context.waitForEvent('page');
  55 | 
  56 |     // 2. Perform a Shift + Click to force open the link in a new window
  57 |     await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Shift'] });
  58 | 
  59 |     // 3. Capture and wait for the new window to load
  60 |     const newWindow = await newWindowPromise;
  61 |     await newWindow.waitForLoadState('load');
  62 | 
  63 |     // 4. Assert you are on the correct new window page
  64 |     await expect(newWindow).toHaveURL(/.*about/);
  65 |     console.log("New Window Title:", await newWindow.title());
  66 | 
  67 |     // Clean up by closing the new window
  68 |     await newWindow.close();
  69 | });
  70 | 
  71 | test('test right click',async({page,context})=>{
  72 |     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
> 73 |     const newWindowPromise = context.waitForEvent('page');
     |                                      ^ Error: browserContext.waitForEvent: Target page, context or browser has been closed
  74 |     await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Control'] });
  75 | 
  76 |     const newWindow = await newWindowPromise;
  77 |     await newWindow.waitForLoadState('load');
  78 | });
```