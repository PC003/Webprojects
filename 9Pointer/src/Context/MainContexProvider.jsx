import React,{useState} from 'react';
import Maincontext from './MainContext.js'
function MainContextProvider({children}) {
    const csedata={
      
        first:{
          BEE:{
              Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "DC Circuit -(Hindi)", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" },
                { url: "https://www.youtube.com/playlist?list=PLoO4K_-66OrWspqLMpHzT_yLLH7e6x4fS  ", title: "DC Circuit -(English)", thumbnail: "https://www.youtube.com/watch?v=NI-ZnmFa3JA&list=PLoO4K_-66OrWspqLMpHzT_yLLH7e6x4fS" }
              ],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLDN15nk5uLiCD8HljuyVX86WVeqTCml33 ", title: "AC Cicuit -(Hindi)", thumbnail: "https://www.youtube.com/watch?v=eQNMh8h9wbA&list=PLDN15nk5uLiCD8HljuyVX86WVeqTCml33&index=1" },
                 { url: ":https://www.youtube.com/playlist?list=PLBlnK6fEyqRi_23q92nQcAnVSM4IzkS9u  ", title: "AC Cicuit -(English)", thumbnail: "https://www.youtube.com/watch?v=Aau_pyvDoWQ&list=PLBlnK6fEyqRi_23q92nQcAnVSM4IzkS9u&index=1" }
               ],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrVA2ZsPQjuwv2pPwDIYVQ_- ", title: "Magnetic Cicuit -(Hindi)", thumbnail: "https://www.youtube.com/watch?v=-V87ANqaHD4&list=PLVND47NlUWrVA2ZsPQjuwv2pPwDIYVQ_-&index=2" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrWSuMg8WXTVawOHFm-H3lbN ", title: "Electric Machines-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=X8iYF-YLAxM&list=PLVND47NlUWrWSuMg8WXTVawOHFm-H3lbN&index=1" },
                { url: "https://www.youtube.com/playlist?list=PLvaYIFqNsyhXBIQp68F4EvWDljXNokjvH ", title: "Electric Machines-(English)", thumbnail: "https://www.youtube.com/watch?v=TnB_qv3pmWw&list=PLvaYIFqNsyhXBIQp68F4EvWDljXNokjvH" }
               ],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLoO4K_-66OrVA-cIhIezXecfrxzBgJZF-  ", title: "Digital Systems-(English)", thumbnail: "https://www.youtube.com/watch?v=NqPhPiSer30&list=PLoO4K_-66OrVA-cIhIezXecfrxzBgJZF-&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrVTJ86cuAjrPqer3tBGwbz3 ", title: "Semiconductor Devices and Applications(Hindi)", thumbnail: "https://www.youtube.com/watch?v=icrAf1us2IQ&list=PLVND47NlUWrVTJ86cuAjrPqer3tBGwbz3&index=1" }],
               
              

          },
          Calculus:{
           Module1: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrVtPJq9KeYEMyRFmlH-z9JA ", title: "Single Variable Calculus-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=bQ_B9cHBYfQ&list=PLVND47NlUWrVtPJq9KeYEMyRFmlH-z9JA&index=1" }],
            Module2: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrXKriws5OYCtyUQSFZP-xhT ", title: "Multivariable Calculus-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=eTp5wq-cSXY&list=PLVND47NlUWrXKriws5OYCtyUQSFZP-xhT&index=1&t=185s" }],
            Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module4: [{ url: "https://www.youtube.com/playlist?list=PLT3bOBUU3L9iJduBlC3tcC6RN2TvUwAno ", title: "Multiple Integrals-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=swF628VHQDo&list=PLT3bOBUU3L9iJduBlC3tcC6RN2TvUwAno&index=1" }],
            Module5: [{ url: "https://www.youtube.com/playlist?list=PLELyD9hiZ4kjTqFvhtfb0tkSS8pdopqvx ", title: "Special Functions-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=LLX0UjUGL5w&list=PLELyD9hiZ4kjTqFvhtfb0tkSS8pdopqvx&index=1" }],
            Module6: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrUF1kTWqf8X8sK6rtbmnV4- ", title: "Vector Differentiation-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=NAJuuEKwOIQ&list=PLVND47NlUWrUF1kTWqf8X8sK6rtbmnV4-&index=1&t=1656s" }],
            Module7: [{ url: "https://www.youtube.com/playlist?list=PLVND47NlUWrVv1wjPoNIgbdYAaPs_iavo ", title: "Vector Integration-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=IE5tAyIQviE&list=PLVND47NlUWrVv1wjPoNIgbdYAaPs_iavo&index=1&t=1043s" }],
            Questions:[ 
              {url: "https://www.youtube.com/playlist?list=PLpklqhIbn1jrjnnOQfC8rIvDJ_iHPjS7k ", title: "Rolle's Theorem & Mean Value Theorem", thumbnail: "https://www.youtube.com/watch?v=BFzyyc8OrZI&list=PLpklqhIbn1jrjnnOQfC8rIvDJ_iHPjS7k&index=1" },
              {url: "https://www.youtube.com/playlist?list=PLpklqhIbn1jq348mSrMmmWMQlixyG8Snk ", title: "Multiple Integrals", thumbnail: "https://www.youtube.com/watch?v=rCQZjpoVJ-o&list=PLpklqhIbn1jq348mSrMmmWMQlixyG8Snk&index=1" },
              {url: "https://www.youtube.com/playlist?list=PLpklqhIbn1jpM7Z7XGv5REMZWEw3vdsKq ", title: "Multivariable Calculus And Applications", thumbnail: "https://www.youtube.com/watch?v=_9lbBJeNeD8&list=PLpklqhIbn1jpM7Z7XGv5REMZWEw3vdsKq&index=1" },
              {url: "https://www.youtube.com/playlist?list=PLpklqhIbn1jqDUu_c760SG9ViANxyHr-R ", title: "Vector Calculus", thumbnail: "https://www.youtube.com/watch?v=lOwrJTFPo54&list=PLpklqhIbn1jqDUu_c760SG9ViANxyHr-R&index=1" },
            
            ]
          },
          Python:{
            All: [{ url: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0", title: "Pyhthon-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=t2_Q2BRzeEE&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=1" },
              { url: "https://www.youtube.com/watch?v=UrsmFxEIp5k", title: "Pyhthon-(Hindi)", thumbnail: "https://www.youtube.com/watch?v=UrsmFxEIp5k" },
              { url: "https://www.youtube.com/watch?v=XKHEtdqhLK8", title: "Pyhthon-(English)", thumbnail: "https://www.youtube.com/watch?v=XKHEtdqhLK8" }
            ],
            
          },
          Chemistry:{
            Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          OOPS:{
            Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
               },
          DifferentialEquationAndTransform:{
               Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          Engineering_Physics:{
               Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
                  },
        },
        second:{
          DSA:{
              Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          Complex:{
               Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          Discrete:{
               Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          DSD:{
               Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
               Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          JAVA:{
            Module1: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module2: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module3: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module4: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module5: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module6: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Module7: [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }],
            Lab:     [{ url: "https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL ", title: "Title", thumbnail: "https://www.youtube.com/watch?v=-F7UJxGpkqw&list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL&index=1" }]
          },
          
      Engineering_Physics:{
         Module1:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module2:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module3:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module4:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module5:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module6:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Module7:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},],
             Lab:[{url:"https://www.youtube.com/playlist?list=PLKS7ZMKnbPrQZZoeQJGYojStGLstMnffL " ,title:"Title"},]
          },
        },   
        
    }
    const [selectedyr,setselectedyr]=useState("first")
  return (
    <Maincontext.Provider value={{csedata,selectedyr,setselectedyr}}>
       {children}
    </Maincontext.Provider>
  );
}

export default MainContextProvider;