import { e as escape_html, d as current_component, f as bind_props, h as copy_payload, i as assign_payload, j as add_styles, p as push, c as pop, k as stringify, l as ensure_array_like, m as head } from "../../chunks/index2.js";
import { f as fallback } from "../../chunks/utils2.js";
import "@sveltejs/kit";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Avatar($$payload, $$props) {
  let index = $$props["index"], area = fallback($$props["area"], 0), time = fallback($$props["time"], 30);
  if (index >= 1 && index <= 2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img src="./images/avatar-ngobrol.png" alt="Avatar Ngobrol" class="svelte-9n3i22">`;
  } else {
    $$payload.out += "<!--[!-->";
    if (index >= 3 && index <= 11) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img src="./images/avatar-pejabat.png" alt="Avatar Pejabat" class="svelte-9n3i22">`;
    } else {
      $$payload.out += "<!--[!-->";
      if (index == 12) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img src="./images/avatar-ngobrol.png" alt="Avatar Ngobrol" class="svelte-9n3i22">`;
      } else {
        $$payload.out += "<!--[!-->";
        if (index == 13) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img src="./images/avatar-pejabat.png" alt="Avatar Pejabat" class="svelte-9n3i22">`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { index, area, time });
}
function Dialog($$payload, $$props) {
  let index = $$props["index"], area = fallback($$props["area"], 0), match = fallback($$props["match"], false), time = fallback($$props["time"], 30);
  let visible = false;
  let next = false;
  if (index) {
    visible = false;
    next = false;
    setTimeout(
      () => {
        visible = true;
      },
      100
    );
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="dialog svelte-1atvtdm"><div${add_styles({
      width: () => {
        {
          return "100%";
        }
      }
    })} class="text svelte-1atvtdm">`;
    if (index == 3) {
      $$payload2.out += "<!--[-->";
      if (visible) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="svelte-1atvtdm">Here are some examples of projects that often get the PSN label. There are other kinds too, like solar power plants and the new capital city project, but... <em>ah</em>, never mind. That whole thing’s a bit unclear.<br><br> From the examples above, which one are you interested in?</p>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
      if (index == 4) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="svelte-1atvtdm">These are the criteria for getting your project onto the PSN list. But don’t stress about them. The only one that really matters is the last point. For someone like you, Rp500 billion is basically pocket change, right?</p> `;
        if (next) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<button class="svelte-1atvtdm">Continue</button>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (index == 5) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<p class="svelte-1atvtdm">These are the permits required to get your project approved quickly. <br><br>Let’s see if you can put each permit into the correct category.</p>`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (index == 6) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<p class="svelte-1atvtdm">There you go! Easy, right?</p> `;
            if (next) {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<button class="svelte-1atvtdm">Continue</button>`;
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
            if (index == 7) {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<p class="svelte-1atvtdm">Now click on the map to choose your project’s location.</p>`;
            } else {
              $$payload2.out += "<!--[!-->";
              if (index == 8) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<p class="svelte-1atvtdm">Do you want to hold any public consultations for your project?</p>`;
              } else {
                $$payload2.out += "<!--[!-->";
                if (index == 9) {
                  $$payload2.out += "<!--[-->";
                  if (time > 10 && time <= 30) {
                    $$payload2.out += "<!--[-->";
                    if (visible) {
                      $$payload2.out += "<!--[-->";
                      $$payload2.out += `<p class="svelte-1atvtdm">Hmm... Let me see how you explain the pros and cons of this project to the community. <br><br> Click on the residents raising their hands to hear what they have to say.</p>`;
                    } else {
                      $$payload2.out += "<!--[!-->";
                    }
                    $$payload2.out += `<!--]-->`;
                  } else {
                    $$payload2.out += "<!--[!-->";
                    if (time <= 10 && time > 0) {
                      $$payload2.out += "<!--[-->";
                      $$payload2.out += `<p class="svelte-1atvtdm">${escape_html(time)} seconds left!</p>`;
                    } else {
                      $$payload2.out += "<!--[!-->";
                      if (time == 0) {
                        $$payload2.out += "<!--[-->";
                        $$payload2.out += `<p class="svelte-1atvtdm">Time's up!</p>`;
                      } else {
                        $$payload2.out += "<!--[!-->";
                      }
                      $$payload2.out += `<!--]-->`;
                    }
                    $$payload2.out += `<!--]-->`;
                  }
                  $$payload2.out += `<!--]-->`;
                } else {
                  $$payload2.out += "<!--[!-->";
                  if (index == 11) {
                    $$payload2.out += "<!--[-->";
                    $$payload2.out += `<p class="svelte-1atvtdm">You don’t really need to bother with public consultations anyway. If people start protesting, you can just send in the police or military to “secure” the situation. <br><br> How far do you want the security forces to go?</p>`;
                  } else {
                    $$payload2.out += "<!--[!-->";
                    if (index == 13) {
                      $$payload2.out += "<!--[-->";
                      $$payload2.out += `<p class="svelte-1atvtdm">Pick the one that suits you best!</p>`;
                    } else {
                      $$payload2.out += "<!--[!-->";
                      if (index == 23) {
                        $$payload2.out += "<!--[-->";
                        $$payload2.out += `<p class="svelte-1atvtdm">You're taking too long!</p>`;
                      } else {
                        $$payload2.out += "<!--[!-->";
                      }
                      $$payload2.out += `<!--]-->`;
                    }
                    $$payload2.out += `<!--]-->`;
                  }
                  $$payload2.out += `<!--]-->`;
                }
                $$payload2.out += `<!--]-->`;
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div> `;
    if (index <= 13) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div${add_styles({
        width: index == 1 || index == 2 || index == 12 ? "60%" : "40%"
      })} class="avatar svelte-1atvtdm">`;
      Avatar($$payload2, {
        get index() {
          return index;
        },
        set index($$value) {
          index = $$value;
          $$settled = false;
        },
        get area() {
          return area;
        },
        set area($$value) {
          area = $$value;
          $$settled = false;
        },
        get time() {
          return time;
        },
        set time($$value) {
          time = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { index, area, match, time });
}
function Intro($$payload, $$props) {
  push();
  let index = $$props["index"], next = fallback($$props["next"], false);
  let visible = false;
  let text = [
    {
      t: "You are a business tycoon from a global superpower."
    },
    {
      t: "During a visit to Indonesia, you receive an invitation to have dinner at the home of a government official. He’s an old acquaintance of yours, with enormous influence in the administration."
    },
    { t: "Over dinner, he asks:" },
    {
      t: "You’re not interested in investing in PSN?"
    },
    { t: "You reply,:" },
    { t: "What’s PSN?" }
  ];
  let text2 = [
    { t: "Your acquaintance explains:" },
    {
      t: "PSN stands for <em>Proyek Strategis Nasional</em>, or National Strategic Projects in English."
    },
    {
      t: "The whole PSN framework was introduced by former President Joko Widodo. Over his 10 years in power, Jokowi overhauled numerous regulations so that projects with the PSN label could move forward with as few obstacles as possible. Bottom line: the government is ready to mobilize the entire state apparatus to back your project."
    },
    {
      t: "Now President Prabowo Subianto is continuing this PSN framework. As of September 2025, there are already 250 projects and programs on the PSN list."
    },
    { t: "Intrigued, you ask:" },
    { t: "So how do I get my own PSN project?" }
  ];
  let text3 = [
    {
      t: "You’re starting to feel confident about investing in PSN. But something still bothers you."
    },
    {
      t: "You remember reading news about how PSN projects in Indonesia have triggered environmental damage, land conflicts, and human rights violations."
    },
    {
      t: "You ask your acquaintance what he thinks. He quickly replies:"
    },
    { t: "Easy" }
  ];
  if (index) {
    next = false;
    visible = false;
    setTimeout(
      () => {
        visible = true;
      },
      100
    );
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="svelte-16fq2kj">`;
    if (index == 1) {
      $$payload2.out += "<!--[-->";
      if (visible) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="text svelte-16fq2kj"><p class="svelte-16fq2kj">${html(text[0].t)}</p> <p class="svelte-16fq2kj">${html(text[1].t)}</p> <p class="svelte-16fq2kj">${html(text[2].t)}</p></div> <div class="dialog-container left svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text[3].t)}</p></div> <br> <div class="text svelte-16fq2kj"><p class="svelte-16fq2kj">${html(text[4].t)}</p></div> <div class="dialog-container right svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text[5].t)}</p></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (next) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<button class="svelte-16fq2kj">CONTINUE</button>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
      if (index == 2) {
        $$payload2.out += "<!--[-->";
        if (visible) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<p class="svelte-16fq2kj">${html(text2[0].t)}</p> <div class="dialog-container left svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text2[1].t)}</p></div> <div class="dialog-container left svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text2[2].t)}</p></div> <div class="dialog-container left svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text2[3].t)}</p></div> <br> <p class="svelte-16fq2kj">${html(text2[4].t)}</p> <div class="dialog-container right svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text2[5].t)}</p></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--> `;
        if (next) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<button class="svelte-16fq2kj">CONTINUE</button>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (index == 12) {
          $$payload2.out += "<!--[-->";
          if (visible) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<div class="text svelte-16fq2kj"><p class="svelte-16fq2kj">${html(text3[0].t)}</p> <p class="svelte-16fq2kj">${html(text3[1].t)}</p> <p class="svelte-16fq2kj">${html(text3[2].t)}</p></div> <div class="dialog-container left svelte-16fq2kj"><p class="dialog svelte-16fq2kj">${html(text3[3].t)}</p></div>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (next) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<button class="svelte-16fq2kj">CONTINUE</button>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--> `;
    Dialog($$payload2, {
      get index() {
        return index;
      },
      set index($$value) {
        index = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { index, next });
  pop();
}
const button = "/_app/immutable/assets/psn-audio-button.Bqo91Nrs.mp3";
function ButtonAudio($$payload, $$props) {
  let play = fallback($$props["play"], false);
  let buttonAudio;
  if (play) {
    buttonAudio.play();
  }
  $$payload.out += `<audio${attr("src", button)}></audio>`;
  bind_props($$props, { play });
}
function Sector($$payload, $$props) {
  let index = $$props["index"], sector = $$props["sector"], jurus = $$props["jurus"];
  let play = false;
  let selected = false;
  $$payload.out += `<section class="svelte-umfbwy">`;
  if (index == 3) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="svelte-umfbwy">First, pick your project:</h2> <div class="svelte-umfbwy"><button${attr("class", `sector svelte-umfbwy ${stringify([
      sector == "bendungan" && selected ? "selected" : ""
    ].filter(Boolean).join(" "))}`)} data-value="bendungan">Dam</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
      sector == "jalantol" && selected ? "selected" : ""
    ].filter(Boolean).join(" "))}`)} data-value="jalantol">Toll Road</button> <button${attr("class", `sector svelte-umfbwy ${stringify([sector == "kereta" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="kereta">Railway</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
      sector == "bandara" && selected ? "selected" : ""
    ].filter(Boolean).join(" "))}`)} data-value="bandara">Ariport/ Port</button> <button${attr("class", `sector svelte-umfbwy ${stringify([sector == "energi" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="energi">Energy Infrastructure</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
      sector == "smelter" && selected ? "selected" : ""
    ].filter(Boolean).join(" "))}`)} data-value="smelter">Smelter</button> <button${attr("class", `sector svelte-umfbwy ${stringify([sector == "kie" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="kie">Industrial/ Economic Zone</button> <button${attr("class", `sector svelte-umfbwy ${stringify([sector == "pangan" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="pangan">Food Estate</button></div> <button class="next svelte-umfbwy"${attr("disabled", !selected, true)}>Continue</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (index == 13) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<h2 class="svelte-umfbwy">Pick a whitewashing move:</h2> <div class="svelte-umfbwy"><button${attr("class", `sector svelte-umfbwy ${stringify([jurus == "hijau" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="hijau">Give your project a “green” label</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
        jurus == "nasionalisme" && selected ? "selected" : ""
      ].filter(Boolean).join(" "))}`)} data-value="nasionalisme">Push a nationalism and sovereignty narrative</button> <button${attr("class", `sector svelte-umfbwy ${stringify([jurus == "csr" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="csr">CSR: hand out food packages, plant trees, etc.</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
        jurus == "peneliti" && selected ? "selected" : ""
      ].filter(Boolean).join(" "))}`)} data-value="peneliti">Pay researchers to write studies you want</button> <button${attr("class", `sector svelte-umfbwy ${stringify([
        jurus == "influencer" && selected ? "selected" : ""
      ].filter(Boolean).join(" "))}`)} data-value="influencer">Pay influencers to promote your project</button> <button${attr("class", `sector svelte-umfbwy ${stringify([jurus == "iklan" && selected ? "selected" : ""].filter(Boolean).join(" "))}`)} data-value="iklan">Buy big ads for positive media coverage</button></div> <button class="next svelte-umfbwy"${attr("disabled", !selected, true)}>Continue</button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section> `;
  ButtonAudio($$payload, { play });
  $$payload.out += `<!---->`;
  bind_props($$props, { index, sector, jurus });
}
function Direct($$payload, $$props) {
  let content = fallback($$props["content"], "");
  let showDirect = fallback($$props["showDirect"], true);
  let play = fallback($$props["play"], false);
  $$payload.out += `<div class="direct svelte-1xu0c3f"><p class="svelte-1xu0c3f">${html(content)}</p> <div class="close svelte-1xu0c3f">X</div></div>`;
  bind_props($$props, { content, showDirect, play });
}
function Matching($$payload, $$props) {
  let match = fallback($$props["match"], false), index = $$props["index"];
  let showDirect = true;
  let play = false;
  let data = {
    columns: [
      { id: 1, label: "Permits" },
      { id: 2, label: "Location Permits" },
      { id: 3, label: "Environmental Permits" },
      { id: 4, label: "Building Permits" }
    ],
    cards: [
      {
        column: 1,
        id: "a",
        target: 2,
        title: "Land Check"
      },
      {
        column: 1,
        id: "b",
        target: 2,
        title: "Spatial Planning"
      },
      {
        column: 1,
        id: "c",
        target: 2,
        title: "Release of Forest Area Status"
      },
      {
        column: 1,
        id: "d",
        target: 3,
        title: "Environmental Feasibility Study"
      },
      {
        column: 1,
        id: "e",
        target: 3,
        title: "Environmental Impact Analysis"
      },
      {
        column: 1,
        id: "f",
        target: 4,
        title: "Site Plan and Building Design"
      },
      {
        column: 1,
        id: "g",
        target: 4,
        title: "Land and Building Tax"
      }
    ]
  };
  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }
  shuffle(data.cards);
  let value = [0, 0, 0];
  function checkData(card) {
    value = [0, 0, 0];
    card.forEach((c) => {
      if (c.column == 2 && c.column == c.target) {
        value[0]++;
      }
      if (c.column == 3 && c.column == c.target) {
        value[1]++;
      }
      if (c.column == 4 && c.column == c.target) {
        value[2]++;
      }
    });
  }
  if (data) {
    checkData(data.cards);
  }
  if (value[0] == 3 && value[1] == 2 && value[2] == 2) {
    match = true;
  }
  if (match) {
    index = 6;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(data.columns);
    const each_array_2 = ensure_array_like(data.columns);
    ButtonAudio($$payload2, { play });
    $$payload2.out += `<!----> <section class="svelte-i4s26d"><ul class="svelte-i4s26d"><div class="source svelte-i4s26d"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let column = each_array[$$index_1];
      const cards = data.cards.filter((c) => c.column === column.id);
      if (column.id == 1) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${add_styles({ border: "none" })} class="column svelte-i4s26d"><h2 class="svelte-i4s26d">${escape_html(column.label)}</h2> `;
        if (cards.length > 0) {
          $$payload2.out += "<!--[-->";
          const each_array_1 = ensure_array_like(cards);
          $$payload2.out += `<ul class="cards svelte-i4s26d"><!--[-->`;
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let card = each_array_1[$$index];
            $$payload2.out += `<li${add_styles({
              "background-color": card.target == 2 ? "#FFFFAF" : card.target == 3 ? "#C6FFC6" : card.target == 4 ? "#FFC5AD" : "#FFFFAF"
            })}${attr("draggable", true)} class="card svelte-i4s26d">${escape_html(card.title)}</li>`;
          }
          $$payload2.out += `<!--]--></ul>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<p class="svelte-i4s26d">No documents yet...</p>`;
        }
        $$payload2.out += `<!--]--></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div> <div class="target svelte-i4s26d"><!--[-->`;
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      let column = each_array_2[i];
      const cards = data.cards.filter((c) => c.column === column.id);
      if (column.id > 1) {
        $$payload2.out += "<!--[-->";
        const each_array_3 = ensure_array_like(Array(value[i - 1]));
        $$payload2.out += `<li${add_styles({
          "background-color": column.id == 2 ? "#FFFF6E" : column.id == 3 ? "#70FF70" : column.id == 4 ? "#FF8C5D" : "#70FF70"
        })} class="column svelte-i4s26d"><h2 class="svelte-i4s26d">${escape_html(column.label)} <!--[-->`;
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          each_array_3[$$index_2];
          $$payload2.out += `<span class="svelte-i4s26d">✅</span>`;
        }
        $$payload2.out += `<!--]--></h2> `;
        if (cards.length > 0) {
          $$payload2.out += "<!--[-->";
          const each_array_4 = ensure_array_like(cards);
          $$payload2.out += `<ul class="cards svelte-i4s26d"><!--[-->`;
          for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
            let card = each_array_4[$$index_3];
            $$payload2.out += `<li${add_styles({
              "background-color": card.target == 2 ? "#FFFFAF" : card.target == 3 ? "#C6FFC6" : card.target == 4 ? "#FFC5AD" : "#FFFFAF",
              "border-color": card.target == column.id ? "green" : "red"
            })}${attr("draggable", true)} class="card svelte-i4s26d">${escape_html(card.title)} <br class="svelte-i4s26d"> ${escape_html(card.target == column.id ? "✅" : "❌")}</li>`;
          }
          $$payload2.out += `<!--]--></ul>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<p class="svelte-i4s26d">No documents yet...</p>`;
        }
        $$payload2.out += `<!--]--></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div></ul> `;
    if (showDirect) {
      $$payload2.out += "<!--[-->";
      Direct($$payload2, {
        get showDirect() {
          return showDirect;
        },
        set showDirect($$value) {
          showDirect = $$value;
          $$settled = false;
        },
        get play() {
          return play;
        },
        set play($$value) {
          play = $$value;
          $$settled = false;
        },
        content: "Drag documents on the left into their correct categories on the right."
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { match, index });
}
function Choice($$payload, $$props) {
  let index = $$props["index"], area = $$props["area"], allowClick = $$props["allowClick"];
  $$payload.out += `<section class="svelte-19o2pe5">`;
  if (index == 8) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${add_styles({ height: "160px" })} class="svelte-19o2pe5">No, or just do the bare minimum</button> <button${add_styles({ height: "160px" })} class="svelte-19o2pe5">Yes, let’s do proper consultations</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { index, area, allowClick });
}
function Map$1($$payload, $$props) {
  push();
  let choice = fallback($$props["choice"], "");
  let play = false;
  let showDirect = true;
  function playAudio() {
    play = true;
    setTimeout(
      () => {
        play = false;
      },
      100
    );
  }
  if (choice != "") {
    playAudio();
    showDirect = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="svelte-wgpoqr"><svg viewBox="0 0 600 600" class="svelte-wgpoqr"><defs><style>
        .unclick {
          pointer-events:none;
        }
        .cls-1 {
          stroke-dasharray: 37.06 2.96 7.41 74.12 1.48 37.06;
        }

        .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20 {
          stroke-width: 2px;
        }

        .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-9, .cls-12, .cls-15, .cls-16, .cls-19 {
          stroke: #00514f;
        }

        .cls-1, .cls-2, .cls-3, .cls-5, .cls-21, .cls-6, .cls-7, .cls-9, .cls-22, .cls-10, .cls-12, .cls-13, .cls-15, .cls-16 {
          fill: none;
        }

        .cls-1, .cls-2, .cls-3, .cls-6, .cls-7, .cls-9, .cls-12, .cls-14, .cls-15, .cls-16, .cls-18 {
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cls-2 {
          stroke-dasharray: 73.85;
        }

        .cls-3 {
          stroke-dasharray: 23.12 1.85 4.62 46.24 .92 23.12;
        }

        .cls-4 {
          fill: #fffacf;
        }

        .cls-4, .cls-5, .cls-21, .cls-8, .cls-10, .cls-11, .cls-13, .cls-23, .cls-17, .cls-19, .cls-20 {
          stroke-miterlimit: 10;
        }

        .cls-24 {
          fill: #f8fdff;
        }

        .cls-21 {
          opacity: .5;
          stroke: #2f334f;
        }

        .cls-6 {
          stroke-dasharray: 89.72;
        }

        .cls-7 {
          stroke-dasharray: 97.47;
        }

        .cls-8 {
          fill: url(#New_Pattern_3);
        }

        .cls-8, .cls-10, .cls-17, .cls-20 {
          stroke: #006012;
        }

        .cls-9 {
          stroke-dasharray: 49.75;
        }

        .cls-11 {
          fill: #c7ffd2;
        }

        .cls-11, .cls-13 {
          stroke: #009303;
        }

        .cls-14 {
          stroke: #704500;
        }

        .cls-14, .cls-18 {
          fill: #fff;
        }
        .cls-17 {
          fill:transparent;
          stroke:transparent;
        }

        .cls-23 {
          fill: #d7f7ff;
          stroke: #0b7189;
        }

        .cls-15 {
          stroke-dasharray: 33.41 2.67 6.68 66.82 1.34 33.41;
        }

        .cls-16 {
          stroke-dasharray: 8.86 .71 1.77 17.73 .35 8.86;
        }

        .cls-18 {
          stroke: #b29400;
        }

        .cls-19 {
          fill: #ceedb4;
        }

        .cls-20 {
          fill: url(#New_Pattern_4);
        }
      </style><pattern id="New_Pattern_4" data-name="New Pattern 4" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" viewBox="0 0 40 40"><g><rect class="cls-22" width="40" height="40"></rect><line class="cls-10" x1="40" y1="40" x2="80" y2="80"></line><g><line class="cls-10" x1="0" y1="40" x2="40" y2="80"></line><line class="cls-10" x1="40" y1="60" x2="20" y2="40"></line><line class="cls-10" x1="10" y1="40" x2="40" y2="70"></line><line class="cls-10" x1="30" y1="40" x2="40" y2="50"></line></g><g><line class="cls-10" x1="-40" y1="40" x2="0" y2="80"></line><line class="cls-10" x1="0" y1="60" x2="-20" y2="40"></line><line class="cls-10" x1="-30" y1="40" x2="0" y2="70"></line><line class="cls-10" x1="-10" y1="40" x2="0" y2="50"></line></g><g><line class="cls-10" x1="40" y1="0" x2="80" y2="40"></line><line class="cls-10" x1="60" y1="40" x2="40" y2="20"></line><line class="cls-10" x1="70" y1="40" x2="40" y2="10"></line><line class="cls-10" x1="40" y1="30" x2="50" y2="40"></line></g><g><line class="cls-10" x1="0" y1="0" x2="40" y2="40"></line><line class="cls-10" x1="40" y1="20" x2="20" y2="0"></line><line class="cls-10" x1="20" y1="40" x2="0" y2="20"></line><line class="cls-10" x1="10" y1="0" x2="40" y2="30"></line><line class="cls-10" x1="30" y1="0" x2="40" y2="10"></line><line class="cls-10" x1="30" y1="40" x2="0" y2="10"></line><line class="cls-10" x1="0" y1="30" x2="10" y2="40"></line></g><g><line class="cls-10" x1="-40" y1="0" x2="0" y2="40"></line><line class="cls-10" x1="0" y1="20" x2="-20" y2="0"></line><line class="cls-10" x1="-30" y1="0" x2="0" y2="30"></line><line class="cls-10" x1="-10" y1="0" x2="0" y2="10"></line></g><g><line class="cls-10" x1="40" y1="-40" x2="80" y2="0"></line><line class="cls-10" x1="60" y1="0" x2="40" y2="-20"></line><line class="cls-10" x1="70" y1="0" x2="40" y2="-30"></line><line class="cls-10" x1="40" y1="-10" x2="50" y2="0"></line></g><g><line class="cls-10" x1="0" y1="-40" x2="40" y2="0"></line><line class="cls-10" x1="20" y1="0" x2="0" y2="-20"></line><line class="cls-10" x1="30" y1="0" x2="0" y2="-30"></line><line class="cls-10" x1="0" y1="-10" x2="10" y2="0"></line></g><line class="cls-10" x1="-40" y1="-40" x2="0" y2="0"></line></g></pattern><pattern id="New_Pattern_3" data-name="New Pattern 3" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" viewBox="0 0 40 40"><g><rect class="cls-22" width="40" height="40"></rect><g><line class="cls-10" x1="80" y1="40" x2="40" y2="80"></line><line class="cls-10" x1="40" y1="60" x2="60" y2="40"></line><line class="cls-10" x1="40" y1="70" x2="70" y2="40"></line><line class="cls-10" x1="50" y1="40" x2="40" y2="50"></line></g><g><line class="cls-10" x1="40" y1="40" x2="0" y2="80"></line><line class="cls-10" x1="0" y1="60" x2="20" y2="40"></line><line class="cls-10" x1="0" y1="70" x2="30" y2="40"></line><line class="cls-10" x1="10" y1="40" x2="0" y2="50"></line></g><line class="cls-10" x1="0" y1="40" x2="-40" y2="80"></line><g><line class="cls-10" x1="80" y1="0" x2="40" y2="40"></line><line class="cls-10" x1="40" y1="20" x2="60" y2="0"></line><line class="cls-10" x1="40" y1="30" x2="70" y2="0"></line><line class="cls-10" x1="50" y1="0" x2="40" y2="10"></line></g><g><line class="cls-10" x1="40" y1="0" x2="0" y2="40"></line><line class="cls-10" x1="20" y1="40" x2="40" y2="20"></line><line class="cls-10" x1="0" y1="20" x2="20" y2="0"></line><line class="cls-10" x1="40" y1="10" x2="10" y2="40"></line><line class="cls-10" x1="40" y1="30" x2="30" y2="40"></line><line class="cls-10" x1="0" y1="30" x2="30" y2="0"></line><line class="cls-10" x1="10" y1="0" x2="0" y2="10"></line></g><g><line class="cls-10" x1="0" y1="0" x2="-40" y2="40"></line><line class="cls-10" x1="-20" y1="40" x2="0" y2="20"></line><line class="cls-10" x1="0" y1="10" x2="-30" y2="40"></line><line class="cls-10" x1="0" y1="30" x2="-10" y2="40"></line></g><line class="cls-10" x1="80" y1="-40" x2="40" y2="0"></line><g><line class="cls-10" x1="40" y1="-40" x2="0" y2="0"></line><line class="cls-10" x1="20" y1="0" x2="40" y2="-20"></line><line class="cls-10" x1="40" y1="-30" x2="10" y2="0"></line><line class="cls-10" x1="40" y1="-10" x2="30" y2="0"></line></g><g><line class="cls-10" x1="0" y1="-40" x2="-40" y2="0"></line><line class="cls-10" x1="-20" y1="0" x2="0" y2="-20"></line><line class="cls-10" x1="0" y1="-30" x2="-30" y2="0"></line><line class="cls-10" x1="0" y1="-10" x2="-10" y2="0"></line></g></g></pattern></defs><g id="Layer_8" class="unclick" data-name="Layer 8"><rect class="cls-24" width="600" height="600"></rect></g><g id="Layer_5" class="unclick" data-name="Layer 5"><rect class="cls-23" x="12.93" y="12.93" width="574.05" height="574.15"></rect></g><g id="grid" class="unclick"><line class="cls-21" x1="100" y1="3.72" x2="100" y2="595.41"></line><line class="cls-21" x1="200" y1="3.72" x2="200" y2="595.41"></line><line class="cls-21" x1="300" y1="3.72" x2="300" y2="595.41"></line><line class="cls-21" x1="400" y1="3.72" x2="400" y2="595.41"></line><line class="cls-21" x1="500" y1="3.72" x2="500" y2="595.41"></line><line class="cls-21" x1="3.72" y1="499.57" x2="596.28" y2="499.57"></line><line class="cls-21" x1="3.72" y1="399.57" x2="596.28" y2="399.57"></line><line class="cls-21" x1="3.72" y1="299.57" x2="596.28" y2="299.57"></line><line class="cls-21" x1="3.72" y1="199.57" x2="596.28" y2="199.57"></line><line class="cls-21" x1="3.72" y1="99.57" x2="596.28" y2="99.57"></line></g><g id="Layer_7" data-name="Layer 7"><g id="click_forest"><path class="cls-19" d="M197.95,117h-32.89c-2.79,0-5.05-2.26-5.05-5.05v-46.89c0-2.79,2.26-5.05,5.05-5.05h29.89c2.79,0,5.05-2.26,5.05-5.05v-9.89c0-2.79,2.26-5.05,5.05-5.05h66.89c2.79,0,5.05,2.26,5.05,5.05v6.89c0,2.79-2.26,5.05-5.05,5.05h-9.4c-2.79,0-5.05,2.26-5.05,5.05v35.89c0,2.79,2.26,5.05,5.05,5.05h9.4c2.79,0,5.05,2.26,5.05,5.05v3.89c0,2.79-2.26,5.05-5.05,5.05h-16.72c-2.79,0-5.05,2.26-5.05,5.05v19.3c0,2.79-2.26,5.05-5.05,5.05h-3.06c-2.79,0-5.05,2.26-5.05,5.05v.48c0,2.79-2.26,5.05-5.05,5.05h-3.89c-2.79,0-5.05-2.26-5.05-5.05v-9.89c0-2.79-2.26-5.05-5.05-5.05h-9.89c-2.79,0-5.05-2.26-5.05-5.05v-9.89c0-2.79-2.26-5.05-5.05-5.05Z"></path><path class="cls-19" d="M197,448v24c0,2.76-2.24,5-5,5h-30c-2.76,0-5,2.24-5,5v18h-29.23c-2.74,0-4.96-2.22-4.96-4.96v-11.17c0-2.74-2.22-4.96-4.96-4.96h-12.89c-2.74,0-4.96-2.22-4.96-4.96v-30.95h18c2.76,0,5-2.24,5-5v-10c0-2.76,2.24-5,5-5h44c2.76,0,5,2.24,5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5,2.24,5,5Z"></path><path class="cls-19" d="M157,207.96v10.08c0,2.74,2.22,4.96,4.96,4.96h30.08c2.74,0,4.96,2.22,4.96,4.96v47.08c0,2.74-2.22,4.96-4.96,4.96h-47.08c-2.74,0-4.96-2.22-4.96-4.96v-30.08c0-2.74-2.22-4.96-4.96-4.96h-10.08c-2.74,0-4.96-2.22-4.96-4.96v-27.08c0-2.74,2.22-4.96,4.96-4.96h27.08c2.74,0,4.96,2.22,4.96,4.96Z"></path><path class="cls-19" d="M520,188v22.84c0,2.79-2.26,5.05-5.05,5.05h-32.9c-2.79,0-5.05,2.26-5.05,5.05v11.01c0,2.79-2.26,5.05-5.05,5.05h-23.9c-2.79,0-5.05-2.26-5.05-5.05v-10.01c0-2.73-2.21-4.94-4.94-4.94h-30.12c-2.73,0-4.94-2.21-4.94-4.94v-10.12c0-2.73-2.21-4.94-4.94-4.94h-30.12c-2.73,0-4.94-2.21-4.94-4.94v-29.76c0-2.87-2.43-5.13-5.28-4.93l-37.72,2.63,32.46,2.63c2.56.21,4.54,2.35,4.54,4.93v30.5c0,2.73,2.21,4.94,4.94,4.94h30.12c2.73,0,4.94,2.21,4.94,4.94v10.12c0,2.73,2.21,4.94,4.94,4.94h30.12c2.73,0,4.94,2.21,4.94,4.94v4.01c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v55.9c0,2.79,2.26,5.05,5.05,5.05h29.9c2.79,0,5.05,2.26,5.05,5.05v3.9c0,2.79-2.26,5.05-5.05,5.05h-6.9c-2.79,0-5.05,2.26-5.05,5.05v17.95h-17.78c-2.8,0-5.06,2.26-5.06,5.06v29.88c0,2.8-2.26,5.06-5.06,5.06h-7.04c-2.8,0-5.06,2.26-5.06,5.06v9.88c0,2.8-2.26,5.06-5.06,5.06h-9.88c-2.8,0-5.06,2.26-5.06,5.06v9.88c0,2.8-2.26,5.06-5.06,5.06h-9.88c-2.8,0-5.06,2.26-5.06,5.06v34.05c0,2.8-2.26,5.06-5.06,5.06h-89.88c-2.8,0-5.06,2.26-5.06,5.06v7.21c0,2.8-2.26,5.06-5.06,5.06h-12.76c-2.8,0-5.06,2.26-5.06,5.06v13.65h-12.07c-2.79,0-5.05,2.26-5.05,5.05v9.69c0,2.79-2.26,5.05-5.05,5.05h-14.95l-12.08-.32c-2.74-.07-4.92-2.31-4.92-5.05v-12.58c0-2.79-2.26-5.05-5.05-5.05h-9.9c-2.79,0-5.05-2.26-5.05-5.05v-3.9c0-2.79,2.26-5.05,5.05-5.05h29.9c2.79,0,5.05-2.26,5.05-5.05v-35.9c0-2.79-2.26-5.05-5.05-5.05h-9.9c-2.79,0-5.05-2.26-5.05-5.05v-3.9c0-2.79,2.26-5.05,5.05-5.05h9.9c2.79,0,5.05-2.26,5.05-5.05v-9.92c0-2.78,2.25-5.03,5.03-5.03h9.94c2.78,0,5.03-2.25,5.03-5.03v-29.94c0-2.78,2.25-5.03,5.03-5.03h14.66c2.92,0,5.23-2.47,5.02-5.38l-2.62-37.62-2.63,32.37c-.21,2.62-2.39,4.63-5.01,4.63h-15.42c-2.78,0-5.03,2.25-5.03,5.03v29.94c0,2.78-2.25,5.03-5.03,5.03h-9.94c-2.78,0-5.03,2.25-5.03,5.03v9.94c0,2.78-2.25,5.03-5.03,5.03h-63.94c-2.78,0-5.03-2.25-5.03-5.03v-29.94c0-2.78-2.25-5.03-5.03-5.03h-12.94c-2.78,0-5.03-2.25-5.03-5.03v-6.94c0-2.78,2.25-5.03,5.03-5.03h29.94c2.78,0,5.03-2.25,5.03-5.03v-29.99c0-2.75,2.23-4.98,4.98-4.98h10.04c2.75,0,4.98-2.23,4.98-4.98v-24.04c0-2.75,2.23-4.98,4.98-4.98h33.04c2.75,0,4.98-2.23,4.98-4.98v-33.43c0-2.59,1.99-4.75,4.58-4.96l32.42-2.63-32.42-2.63c-2.59-.21-4.58-2.37-4.58-4.96v-10.43c0-2.75-2.23-4.98-4.98-4.98h-30.04c-2.75,0-4.98-2.23-4.98-4.98v-10.04c0-2.75-2.23-4.98-4.98-4.98h-39.04c-2.75,0-4.98,2.23-4.98,4.98v13.04c0,2.75-2.23,4.98-4.98,4.98h-29.02v-95c0-2.76,2.24-5,5-5h10c2.76,0,5-2.24,5-5v-35h49.02c2.75,0,4.98,2.23,4.98,4.98v33.04c0,2.75,2.23,4.98,4.98,4.98h33.04c2.75,0,4.98,2.23,4.98,4.98v10.04c0,2.75,2.23,4.98,4.98,4.98h10.04c2.75,0,4.98,2.23,4.98,4.98v10.04c0,2.75,2.23,4.98,4.98,4.98h10.43c2.59,0,4.75,1.99,4.96,4.58l2.63,32.42,2.7-42.86c.17-2.66,2.37-4.73,5.03-4.73h3.4c2.78,0,5.04-2.26,5.04-5.04v-19.33c0-2.78,2.26-5.04,5.04-5.04h16.75c2.78,0,5.04-2.26,5.04-5.04v-15.92c0-2.78-2.26-5.04-5.04-5.04h-9.43c-2.78,0-5.04-2.26-5.04-5.04v-23.92c0-2.78,2.26-5.04,5.04-5.04h9.36c2.82,0,5.11-2.29,5.11-5.11v-12.78c0-2.82,2.29-5.11,5.11-5.11h11.89v54.98c0,2.77,2.25,5.02,5.02,5.02h94.98v-10.14h40v10.14h41.5v20h18.5v68h20Z"></path><path class="cls-19" d="M501.02,221.89v92.19c0,2.77-2.25,5.02-5.02,5.02h-8.93c-2.77,0-5.02,2.25-5.02,5.02v10.86c0,2.77-2.25,5.02-5.02,5.02h-31.03v-12c0-2.76,2.24-5,5-5h7c2.76,0,5-2.24,5-5v-16c0-2.76-2.24-5-5-5h-30c-2.76,0-5-2.24-5-5v-44c0-2.76,2.24-5,5-5h50c2.76,0,5-2.24,5-5v-11.11c0-2.76,2.24-5,5-5h13.02Z"></path></g><g id="click_beach"><path class="cls-4" d="M77,442v10c0,2.76-2.24,5-5,5h-7c-2.76,0-5-2.24-5-5v-27c0-2.76,2.24-5,5-5h10c2.76,0,5-2.24,5-5v-10c0-2.76,2.24-5,5-5h10c2.76,0,5-2.24,5-5v-7c0-2.76,2.24-5,5-5h7c2.76,0,5,2.24,5,5v44c0,2.76-2.24,5-5,5h-30c-2.76,0-5,2.24-5,5Z"></path><path class="cls-4" d="M157,500v12c0,2.76-2.24,5-5,5h-10c-2.76,0-5,2.24-5,5v13c0,2.76-2.24,5-5,5h-7c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-7c0-2.76,2.24-5,5-5h13c2.76,0,5-2.24,5-5v-10c0-2.76,2.24-5,5-5h12v30.95c0,2.74,2.22,4.96,4.96,4.96h12.89c2.74,0,4.96,2.22,4.96,4.96v11.17c0,2.74,2.22,4.96,4.96,4.96h29.23Z"></path><path class="cls-4" d="M200,530.89v4.08c0,2.77-2.25,5.02-5.02,5.02h-46.95c-2.77,0-5.02-2.25-5.02-5.02v-6.95c0-2.77,2.25-5.02,5.02-5.02h9.95c2.77,0,5.02-2.25,5.02-5.02v-9.95c0-2.77,2.25-5.02,5.02-5.02h3.95c2.77,0,5.02,2.25,5.02,5.02v12.47c0,2.72,2.17,4.95,4.89,5.02l13.22.35c2.72.07,4.89,2.3,4.89,5.02Z"></path><path class="cls-4" d="M540,105.07v70c0,2.78-2.25,5.03-5.03,5.03h-9.94c-.17,0-.34.01-.51.03-.17.01-.33.04-.5.07-.3.06-.6.15-.88.27-.1.04-.19.08-.28.12-.28.13-.53.29-.77.46-.03.02-.06.04-.09.07-.13.09-.26.2-.38.32-.02.01-.04.03-.05.04-.15.14-.28.28-.41.44t0,.01c-.12.15-.24.31-.35.47,0,.01-.01.01-.01.02-.13.2-.24.4-.33.61-.05.09-.08.18-.12.28-.11.28-.2.57-.25.88-.03.14-.05.28-.06.43-.02.17-.03.34-.03.51v2.87h-20v-68h-18.5v-20h-41.5v-10.14h-40v10.14h-94.98c-2.77,0-5.02-2.25-5.02-5.02v-54.98h14.89c2.82,0,5.11,2.29,5.11,5.11v9.78c0,2.82,2.29,5.11,5.11,5.11h29.78c2.82,0,5.11,2.29,5.11,5.11v9.78c0,2.82,2.29,5.11,5.11,5.11h29.78c2.82,0,5.11-2.29,5.11-5.11v-29.78c0-2.82,2.29-5.11,5.11-5.11h69.86c2.78,0,5.03,2.25,5.03,5.03v9.94c0,2.78,2.25,5.03,5.03,5.03h9.94c2.78,0,5.03,2.25,5.03,5.03v9.94c0,2.78,2.25,5.03,5.03,5.03h9.94c2.78,0,5.03,2.25,5.03,5.03v9.98c0,2.78,2.25,5.03,5.03,5.03h9.94c2.78,0,5.03,2.25,5.03,5.03Z"></path><path class="cls-4" d="M440,340v54.97c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v9.9c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v10.09c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v29.9c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v9.9c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v9.9c0,2.79-2.26,5.05-5.05,5.05h-49.9c-2.79,0-5.05-2.26-5.05-5.05v-9.9c0-2.79-2.26-5.05-5.05-5.05h-37.83v-13.65c0-2.8,2.26-5.06,5.06-5.06h12.76c2.8,0,5.06-2.26,5.06-5.06v-7.21c0-2.8,2.26-5.06,5.06-5.06h89.88c2.8,0,5.06-2.26,5.06-5.06v-34.05c0-2.8,2.26-5.06,5.06-5.06h9.88c2.8,0,5.06-2.26,5.06-5.06v-9.88c0-2.8,2.26-5.06,5.06-5.06h9.88c2.8,0,5.06-2.26,5.06-5.06v-9.88c0-2.8,2.26-5.06,5.06-5.06h7.04c2.8,0,5.06-2.26,5.06-5.06v-29.88c0-2.8,2.26-5.06,5.06-5.06h17.78Z"></path><path class="cls-4" d="M540,245v70c0,2.76-2.24,5-5,5h-10c-2.76,0-5,2.24-5,5v10c0,2.76-2.24,5-5,5h-10c-2.76,0-5,2.24-5,5v30.02c0,2.76-2.24,5-5,5h-30c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-4c-2.76,0-5-2.24-5-5v-15.02h31.03c2.77,0,5.02-2.25,5.02-5.02v-10.86c0-2.77,2.25-5.02,5.02-5.02h8.93c2.77,0,5.02-2.25,5.02-5.02v-92.19h13.98c2.76,0,5,2.24,5,5v8.11c0,2.76,2.24,5,5,5h10c2.76,0,5,2.24,5,5Z"></path><path class="cls-4" d="M100,80v35c0,2.76-2.24,5-5,5h-10c-2.76,0-5,2.24-5,5v95h-15.02c-2.75,0-4.98-2.23-4.98-4.98v-10.04c0-2.75-2.23-4.98-4.98-4.98h-10.04c-2.75,0-4.98-2.23-4.98-4.98v-70.04c0-2.75,2.23-4.98,4.98-4.98h10.04c2.75,0,4.98-2.23,4.98-4.98v-9.96c0-2.75,2.23-4.98,4.98-4.98h10.04c2.75,0,4.98-2.23,4.98-4.98v-10.12c0-2.75,2.23-4.98,4.98-4.98h15.02Z"></path></g><g id="farm"><path class="cls-20" d="M117.97,360v17h-12.94c-2.78,0-5.03-2.25-5.03-5.03v-6.94c0-2.78,2.25-5.03,5.03-5.03h12.94Z"></path><path class="cls-8" d="M161.49,354.97v62.03h-33.46c-2.78,0-5.03-2.25-5.03-5.03v-29.94c0-2.78-2.25-5.03-5.03-5.03v-17h17c2.78,0,5.03-2.25,5.03-5.03h21.49Z"></path><rect class="cls-20" x="161.49" y="354.97" width="22.95" height="47.06"></rect><path class="cls-20" d="M197,402.03v9.94c0,2.78-2.25,5.03-5.03,5.03h-30.48v-14.97h35.51Z"></path><path class="cls-8" d="M217,362.03v29.94c0,2.78-2.25,5.03-5.03,5.03h-9.94c-2.78,0-5.03,2.25-5.03,5.03h-12.56v-40h32.56Z"></path><path class="cls-20" d="M400,120v42.3h-37c0-2.87-2.43-5.13-5.28-4.93l-37.72,2.63v-40h80Z"></path><path class="cls-8" d="M400,162.3v35.1c-.59-.26-1.25-.4-1.94-.4h-30.12c-2.73,0-4.94-2.21-4.94-4.94v-29.76h37Z"></path><path class="cls-20" d="M482.05,188v27.89c-2.79,0-5.05,2.26-5.05,5.05v11.01c0,2.79-2.26,5.05-5.05,5.05h-23.9c-2.79,0-5.05-2.26-5.05-5.05v-10.01c0-2.04-1.23-3.79-3-4.54v-29.4h42.05Z"></path><path class="cls-8" d="M440,164.59v52.81c-.59-.26-1.25-.4-1.94-.4h-30.12c-2.73,0-4.94-2.21-4.94-4.94v-10.12c0-2.04-1.23-3.79-3-4.54v-32.81h40Z"></path><path class="cls-8" d="M520,188v22.84c0,2.79-2.26,5.05-5.05,5.05h-32.9v-27.89h37.95Z"></path><g><rect class="cls-8" x="368.44" y="100" width="31.56" height="20"></rect><rect class="cls-8" x="320" y="100" width="48.44" height="20"></rect><rect class="cls-20" x="400" y="89.86" width="40" height="74.73"></rect><rect class="cls-8" x="440" y="100" width="41.5" height="40"></rect><rect class="cls-20" x="481.5" y="120" width="18.5" height="20"></rect><rect class="cls-8" x="440" y="140" width="60" height="48"></rect><path class="cls-8" d="M242.69,363v30.86h-19.69v-25.83c0-2.78,2.25-5.03,5.03-5.03h14.66Z"></path><path class="cls-20" d="M281.93,357.62v42.38h-21.93v-6.14h-17.31v-30.86c2.92,0,5.23-2.47,5.02-5.38h34.22Z"></path><rect class="cls-8" x="260" y="400" width="60" height="40"></rect><rect class="cls-8" x="260" y="300" width="20" height="57.62"></rect><polygon class="cls-8" points="320 260 320 317.44 280 317.44 280 280 300 280 300 260 320 260"></polygon><rect class="cls-20" x="320" y="260" width="20" height="40"></rect><rect class="cls-20" x="360" y="280" width="40" height="20"></rect><rect class="cls-8" x="340" y="280" width="20" height="20"></rect><polygon class="cls-20" points="400 300 400 320 380 320 380 338.2 320 338.2 320 300 400 300"></polygon><rect class="cls-20" x="360" y="338.2" width="20" height="41.8"></rect><rect class="cls-8" x="320" y="338.2" width="40" height="61.8"></rect><rect class="cls-20" x="281.93" y="357.62" width="38.07" height="42.38"></rect><rect class="cls-20" x="280" y="317.44" width="40" height="40.18"></rect></g></g><g id="click_farm"><path class="cls-17" d="M184.44,354.97h-44.44c0,2.78-2.25,5.03-5.03,5.03h-29.94c-2.78,0-5.03,2.25-5.03,5.03v6.94c0,2.78,2.25,5.03,5.03,5.03h12.94c2.78,0,5.03,2.25,5.03,5.03v29.94c0,2.78,2.25,5.03,5.03,5.03h63.94c2.78,0,5.03-2.25,5.03-5.03v-9.94c0-2.78,2.25-5.03,5.03-5.03h9.94c2.78,0,5.03-2.25,5.03-5.03v-29.94h-32.56v-7.06Z"></path><path class="cls-17" d="M500,188v-68h-18.5v-20h-41.5v-10.14h-40v10.14h-80v60l37.72-2.63c2.85-.2,5.28,2.06,5.28,4.93v29.76c0,2.73,2.21,4.94,4.94,4.94h30.12c.69,0,1.35.14,1.94.4,1.77.75,3,2.5,3,4.54v10.12c0,2.73,2.21,4.94,4.94,4.94h30.12c.69,0,1.35.14,1.94.4,1.77.75,3,2.5,3,4.54v10.01c0,2.79,2.26,5.05,5.05,5.05h23.9c2.79,0,5.05-2.26,5.05-5.05v-11.01c0-2.79,2.26-5.05,5.05-5.05h32.9c2.79,0,5.05-2.26,5.05-5.05v-22.84h-20Z"></path><path class="cls-17" d="M340,280v-20h-40v20h-20v20h-20v57.62h-12.29c.21,2.91-2.1,5.38-5.02,5.38h-14.66c-2.78,0-5.03,2.25-5.03,5.03v25.83h37v46.14h60v-40h40v-20h20v-60h20v-40h-60Z"></path></g><g id="adat"><g><path class="cls-18" d="M267.99,208.26c0,3.51-15.99,3.51-15.99,0v-9.79c0,2.09,15.99,2.09,15.99,0v9.79Z"></path><polyline class="cls-18" points="252.01 198.47 260 189.55 267.99 198.47"></polyline></g><g><path class="cls-18" d="M281.71,189.24c0,3.09-14.04,3.09-14.04,0v-8.6c0,1.84,14.04,1.84,14.04,0v8.6Z"></path><polyline class="cls-18" points="267.67 180.64 274.69 172.8 281.71 180.64"></polyline></g><g><path class="cls-18" d="M290.53,220.91c0,4.06-18.48,4.06-18.48,0v-11.32c0,2.42,18.48,2.42,18.48,0v11.32Z"></path><polyline class="cls-18" points="272.05 209.59 281.29 199.27 290.53 209.59"></polyline></g></g><g class="unclick"><path class="cls-5" d="M450,441.61c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><path class="cls-5" d="M470,461.82c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><path class="cls-5" d="M470,518.76c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><path class="cls-5" d="M460,538.97c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><path class="cls-5" d="M60,287.64c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><path class="cls-5" d="M50,307.85c6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0,6.67,3.87,13.33,3.87,20,0"></path><g><path class="cls-12" d="M80.57,230h-15.59c-8.27,0-14.98-6.71-14.98-14.98v-.08c0-2.73-2.21-4.94-4.94-4.94h-.08c-1.01,0-2-.1-2.96-.29"></path><path class="cls-15" d="M40.72,209.39c-6.2-1.83-10.72-7.57-10.72-14.37v-70.04c0-8.27,6.71-14.98,14.98-14.98h.08c2.73,0,4.94-2.21,4.94-4.94h0c0-8.27,6.71-14.98,14.98-14.98h.08c2.18,0,4.02-1.41,4.68-3.36"></path><path class="cls-12" d="M70.08,83.41c.79-7.53,7.16-13.41,14.9-13.41h28.05"></path></g><path class="cls-9" d="M50,448.9v-23.9c0-8.27,6.73-15,15-15h2.3"></path><g><path class="cls-12" d="M241.76,510.21h23.29c2.73,0,4.95,2.22,4.95,4.95,0,6.7,4.38,12.38,10.43,14.33"></path><path class="cls-1" d="M281.86,529.87c1.03.22,2.09.34,3.19.34h49.9c8.31,0,15.05-6.74,15.05-15.05,0-2.73,2.22-4.95,4.95-4.95h0c8.31,0,15.05-6.74,15.05-15.05h0c0-2.73,2.22-4.95,4.95-4.95h0c8.31,0,15.05-6.74,15.05-15.05v-20c0-2.56,1.94-4.66,4.43-4.92"></path><path class="cls-12" d="M398.11,449.88c6.79-1.45,11.89-7.49,11.89-14.72v-.19c0-2.73,2.22-4.95,4.95-4.95h0c7.61,0,13.92-5.68,14.91-13.02"></path></g><g><path class="cls-12" d="M496.23,50.06c7.7.63,13.77,7.1,13.77,14.97v4.97h4.97c8.3,0,15.03,6.73,15.03,15.03v5.01h4.97c8.3,0,15.03,6.73,15.03,15.03v21.43"></path><line class="cls-16" x1="550" y1="126.85" x2="550" y2="166.74"></line><path class="cls-12" d="M550,167.63v7.44c0,8.3-6.73,15.03-15.03,15.03-2.74,0-4.97,2.23-4.97,4.97v11.16"></path></g><g><path class="cls-12" d="M306.91,30h7.98c8.35,0,15.11,6.76,15.11,15.11h0c0,2.7,2.19,4.89,4.89,4.89h10.62"></path><path class="cls-3" d="M346.44,50h8.45c8.35,0,15.11,6.76,15.11,15.11h0c0,2.7,2.19,4.89,4.89,4.89h10.22c2.7,0,4.89-2.19,4.89-4.89v-20c0-8.35,6.76-15.11,15.11-15.11h2.58"></path><line class="cls-12" x1="410" y1="30" x2="460" y2="30"></line></g><path class="cls-6" d="M550,259.9v55.1c0,8.28-6.72,15-15,15-2.76,0-5,2.24-5,5h0c0,1.1-.12,2.17-.34,3.2"></path><path class="cls-7" d="M97.62,528.05c2.18,1.24,4.69,1.95,7.38,1.95h0c2.76,0,5,2.24,5,5,0,8.28,6.72,15,15,15h7c.66,0,1.3-.04,1.94-.13,4.04-.53,8.11-.53,12.15,0,.63.08,1.28.13,1.93.13h35.3"></path><path class="cls-2" d="M130,270.61v4.43c0,8.26,6.7,14.96,14.96,14.96h.1c2.76,0,4.99,2.24,4.98,4.99l-.03,10.04c0,2.75-2.23,4.97-4.98,4.97h-.05c-7.1,0-13.06,4.96-14.59,11.6"></path><path class="cls-5" d="M152,517h-10c-2.76,0-5,2.24-5,5v13c0,2.76-2.24,5-5,5h-7c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5-2.24-5-5v-7c0-2.76,2.24-5,5-5h13c2.76,0,5-2.24,5-5v-10c0-2.76,2.24-5,5-5h30c2.76,0,5-2.24,5-5v-10c0-2.76,2.24-5,5-5h44c2.76,0,5,2.24,5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5,2.24,5,5v24c0,2.76-2.24,5-5,5h-30c-2.76,0-5,2.24-5,5v30c0,2.76-2.24,5-5,5Z"></path><line class="cls-5" x1="100" y1="443" x2="100" y2="442.16"></line><line class="cls-10" x1="441.09" y1="340" x2="440" y2="340"></line></g><g id="housing"><g><polyline class="cls-14" points="174.03 341.63 174.03 315.77 184.03 321.19 184.03 347.05 174.03 341.63"></polyline><polyline class="cls-14" points="197.92 341.63 197.92 315.77 184.03 321.19 184.03 347.05 197.92 341.63"></polyline><polygon class="cls-14" points="174.03 315.77 187.78 310.57 197.92 315.77 184.03 321.19 174.03 315.77"></polygon></g><g><polyline class="cls-14" points="388.06 370.44 388.06 331.29 398.06 336.72 398.06 375.86 388.06 370.44"></polyline><polyline class="cls-14" points="411.94 370.44 411.94 331.29 398.06 336.72 398.06 375.86 411.94 370.44"></polyline><polygon class="cls-14" points="388.06 331.29 401.81 326.1 411.94 331.29 398.06 336.72 388.06 331.29"></polygon></g><g><polyline class="cls-14" points="85 141.26 85 102.12 95 107.55 95 146.69 85 141.26"></polyline><polyline class="cls-14" points="108.89 141.26 108.89 102.12 95 107.55 95 146.69 108.89 141.26"></polyline><polygon class="cls-14" points="85 102.12 98.75 96.93 108.89 102.12 95 107.55 85 102.12"></polygon></g><g><polyline class="cls-14" points="300.96 451.97 300.96 426.12 310.97 431.54 310.97 457.4 300.96 451.97"></polyline><polyline class="cls-14" points="324.85 451.97 324.85 426.12 310.97 431.54 310.97 457.4 324.85 451.97"></polyline><polygon class="cls-14" points="300.96 426.12 314.72 420.92 324.85 426.12 310.97 431.54 300.96 426.12"></polygon></g><g><polyline class="cls-14" points="128.94 160.36 128.94 149.02 138.94 154.45 138.94 165.78 128.94 160.36"></polyline><g><polyline class="cls-14" points="151.1 160.36 151.1 149.02 138.94 154.45 138.94 165.78 151.1 160.36"></polyline><polygon class="cls-14" points="128.94 149.02 138.94 154.45 151.1 149.02 145.81 139.15 134.43 143.42 128.94 149.02"></polygon><line class="cls-14" x1="136.29" y1="146" x2="138.36" y2="150.87"></line></g></g><g><polyline class="cls-14" points="328.08 432.55 328.08 395.42 338.09 400.84 338.09 437.97 328.08 432.55"></polyline><polyline class="cls-14" points="351.97 432.55 351.97 395.42 338.09 400.84 338.09 437.97 351.97 432.55"></polyline><polygon class="cls-14" points="328.08 395.42 341.84 390.22 351.97 395.42 338.09 400.84 328.08 395.42"></polygon></g><g><polyline class="cls-14" points="214.96 343.97 214.96 332.63 224.96 338.06 224.96 349.4 214.96 343.97"></polyline><g><polyline class="cls-14" points="237.12 343.97 237.12 332.63 224.96 338.06 224.96 349.4 237.12 343.97"></polyline><polygon class="cls-14" points="214.96 332.63 224.96 338.06 237.12 332.63 231.83 322.77 220.45 327.04 214.96 332.63"></polygon><line class="cls-14" x1="222.31" y1="329.61" x2="224.38" y2="334.49"></line></g></g><g><polyline class="cls-14" points="379.42 237.89 379.42 226.55 389.43 231.98 389.43 243.32 379.42 237.89"></polyline><g><polyline class="cls-14" points="401.59 237.89 401.59 226.55 389.43 231.98 389.43 243.32 401.59 237.89"></polyline><polygon class="cls-14" points="379.42 226.55 389.43 231.98 401.59 226.55 396.3 216.68 384.91 220.96 379.42 226.55"></polygon><line class="cls-14" x1="386.78" y1="223.53" x2="388.84" y2="228.41"></line></g></g><g><polyline class="cls-14" points="113.9 102.9 113.9 91.56 123.9 96.99 123.9 108.32 113.9 102.9"></polyline><g><polyline class="cls-14" points="136.06 102.9 136.06 91.56 123.9 96.99 123.9 108.32 136.06 102.9"></polyline><polygon class="cls-14" points="113.9 91.56 123.9 96.99 136.06 91.56 130.77 81.69 119.38 85.96 113.9 91.56"></polygon><line class="cls-14" x1="121.25" y1="88.54" x2="123.31" y2="93.42"></line></g></g><g><polyline class="cls-14" points="270.21 451.52 270.21 440.19 280.21 445.61 280.21 456.95 270.21 451.52"></polyline><g><polyline class="cls-14" points="292.37 451.52 292.37 440.19 280.21 445.61 280.21 456.95 292.37 451.52"></polyline><polygon class="cls-14" points="270.21 440.19 280.21 445.61 292.37 440.19 287.08 430.32 275.7 434.59 270.21 440.19"></polygon><line class="cls-14" x1="277.56" y1="437.17" x2="279.62" y2="442.04"></line></g></g><g><polyline class="cls-14" points="145.64 342.81 145.64 331.47 155.64 336.89 155.64 348.23 145.64 342.81"></polyline><g><polyline class="cls-14" points="167.8 342.81 167.8 331.47 155.64 336.89 155.64 348.23 167.8 342.81"></polyline><polygon class="cls-14" points="145.64 331.47 155.64 336.89 167.8 331.47 162.51 321.6 151.12 325.87 145.64 331.47"></polygon><line class="cls-14" x1="152.99" y1="328.45" x2="155.05" y2="333.32"></line></g></g><g><polyline class="cls-14" points="348.92 261.04 348.92 249.71 358.92 255.13 358.92 266.47 348.92 261.04"></polyline><g><polyline class="cls-14" points="371.08 261.04 371.08 249.71 358.92 255.13 358.92 266.47 371.08 261.04"></polyline><polygon class="cls-14" points="348.92 249.71 358.92 255.13 371.08 249.71 365.79 239.84 354.41 244.11 348.92 249.71"></polygon><line class="cls-14" x1="356.27" y1="246.69" x2="358.34" y2="251.56"></line></g></g><g><polyline class="cls-14" points="224.38 321.67 224.38 310.33 212.22 315.76 212.22 327.09 224.38 321.67"></polyline><polygon class="cls-14" points="224.38 310.33 212.22 315.75 212.22 327.09 202.22 321.66 202.22 301.45 213.6 297.17 224.38 310.33"></polygon><line class="cls-14" x1="202.21" y1="301.45" x2="211.63" y2="312.19"></line></g><g><polyline class="cls-14" points="139.58 136.16 139.58 124.83 127.42 130.25 127.42 141.59 139.58 136.16"></polyline><polygon class="cls-14" points="139.58 124.83 127.42 130.25 127.42 141.59 117.42 136.16 117.42 115.95 128.8 111.67 139.58 124.83"></polygon><line class="cls-14" x1="117.42" y1="115.94" x2="126.84" y2="126.68"></line></g><g><polyline class="cls-14" points="371.08 232.59 371.08 221.25 358.92 226.68 358.92 238.02 371.08 232.59"></polyline><polygon class="cls-14" points="371.08 221.26 358.92 226.68 358.92 238.02 348.92 232.59 348.92 212.38 360.3 208.1 371.08 221.26"></polygon><line class="cls-14" x1="348.92" y1="212.37" x2="358.34" y2="223.11"></line></g><g><polyline class="cls-14" points="352.77 452.6 352.77 441.26 340.61 446.69 340.61 458.03 352.77 452.6"></polyline><polygon class="cls-14" points="352.77 441.27 340.61 446.69 340.61 458.03 330.61 452.6 330.61 432.39 341.99 428.11 352.77 441.27"></polygon><line class="cls-14" x1="330.61" y1="432.38" x2="340.03" y2="443.12"></line></g><g><polyline class="cls-14" points="366.62 390.11 366.62 364.25 376.62 369.67 376.62 395.53 366.62 390.11"></polyline><polyline class="cls-14" points="390.51 390.11 390.51 364.25 376.62 369.67 376.62 395.53 390.51 390.11"></polyline><polygon class="cls-14" points="366.62 364.25 380.37 359.05 390.51 364.25 376.62 369.67 366.62 364.25"></polygon></g><g><polyline class="cls-14" points="381.11 267.95 381.11 242.09 391.12 247.51 391.12 273.37 381.11 267.95"></polyline><polyline class="cls-14" points="405 267.95 405 242.09 391.12 247.51 391.12 273.37 405 267.95"></polyline><polygon class="cls-14" points="381.11 242.09 394.87 236.89 405 242.09 391.12 247.51 381.11 242.09"></polygon></g><g><polyline class="cls-14" points="85 164.33 85 138.47 95 143.89 95 169.75 85 164.33"></polyline><polyline class="cls-14" points="108.89 164.33 108.89 138.47 95 143.89 95 169.75 108.89 164.33"></polyline><polygon class="cls-14" points="85 138.47 98.75 133.27 108.89 138.47 95 143.89 85 138.47"></polygon></g><g><polyline class="cls-14" points="105.06 185.24 105.06 146.1 115.06 151.52 115.06 190.66 105.06 185.24"></polyline><polyline class="cls-14" points="128.94 185.24 128.94 146.1 115.06 151.52 115.06 190.66 128.94 185.24"></polyline><polygon class="cls-14" points="105.06 146.1 118.81 140.9 128.94 146.1 115.06 151.52 105.06 146.1"></polygon></g><g><polyline class="cls-14" points="85 206.83 85 180.97 95 186.39 95 212.25 85 206.83"></polyline><polyline class="cls-14" points="108.89 206.83 108.89 180.97 95 186.39 95 212.25 108.89 206.83"></polyline><polygon class="cls-14" points="85 180.97 98.75 175.77 108.89 180.97 95 186.39 85 180.97"></polygon></g><g><polyline class="cls-14" points="472.69 276.34 472.69 250.48 482.69 255.9 482.69 281.76 472.69 276.34"></polyline><polyline class="cls-14" points="496.58 276.34 496.58 250.48 482.69 255.9 482.69 281.76 496.58 276.34"></polyline><polygon class="cls-14" points="472.69 250.48 486.44 245.28 496.58 250.48 482.69 255.9 472.69 250.48"></polygon></g><g><polyline class="cls-14" points="469.11 309.46 469.11 270.32 479.11 275.74 479.11 314.88 469.11 309.46"></polyline><polyline class="cls-14" points="493 309.46 493 270.32 479.11 275.74 479.11 314.88 493 309.46"></polyline><polygon class="cls-14" points="469.11 270.32 482.86 265.12 493 270.32 479.11 275.74 469.11 270.32"></polygon></g></g><g id="trees"><g><path class="cls-11" d="M223.61,23.09l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="220.11" y1="59.46" x2="220.11" y2="53.64"></line></g><g><path class="cls-11" d="M200.22,34.17l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="196.71" y1="70.53" x2="196.71" y2="64.71"></line></g><g><path class="cls-11" d="M274.23,129.34l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="270.72" y1="165.7" x2="270.72" y2="159.88"></line></g><g><path class="cls-11" d="M169.32,45.19l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="165.82" y1="81.55" x2="165.82" y2="75.73"></line></g><g><path class="cls-11" d="M251.14,28.2l4.82,14.91c1.68,5.2-2.2,10.54-7.67,10.54h-.16c-5.47,0-9.36-5.34-7.66-10.54,1.54-4.75,3.35-10.31,4.82-14.9.91-2.84,4.92-2.84,5.84,0Z"></path><line class="cls-13" x1="248.22" y1="59.46" x2="248.22" y2="53.64"></line></g><g><path class="cls-11" d="M302.92,139.85l4.82,14.91c1.68,5.2-2.2,10.54-7.67,10.54h-.16c-5.47,0-9.36-5.34-7.66-10.54,1.54-4.75,3.35-10.31,4.82-14.9.91-2.84,4.92-2.84,5.84,0Z"></path><line class="cls-13" x1="300" y1="171.11" x2="300" y2="165.29"></line></g><g><path class="cls-11" d="M248.24,54.06l4.82,14.91c1.68,5.2-2.2,10.54-7.67,10.54h-.16c-5.47,0-9.36-5.34-7.66-10.54,1.54-4.75,3.35-10.31,4.82-14.9.91-2.84,4.92-2.84,5.84,0Z"></path><line class="cls-13" x1="245.32" y1="85.32" x2="245.32" y2="79.5"></line></g><g><path class="cls-11" d="M184.16,59.87l4.82,14.91c1.68,5.2-2.2,10.54-7.67,10.54h-.16c-5.47,0-9.36-5.34-7.66-10.54,1.54-4.75,3.35-10.31,4.82-14.9.91-2.84,4.92-2.84,5.84,0Z"></path><line class="cls-13" x1="181.24" y1="91.13" x2="181.24" y2="85.31"></line></g><g><path class="cls-11" d="M237.47,33.85c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="234.41" y1="59.46" x2="234.41" y2="53.64"></line></g><g><path class="cls-11" d="M269.64,26.33c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="266.58" y1="51.94" x2="266.58" y2="46.12"></line></g><g><path class="cls-11" d="M228.47,48.83c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="225.41" y1="74.44" x2="225.41" y2="68.62"></line></g><g><path class="cls-11" d="M291.26,139.95c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="288.2" y1="165.56" x2="288.2" y2="159.74"></line></g><g><path class="cls-11" d="M217.6,101.02c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="214.54" y1="126.63" x2="214.54" y2="120.81"></line></g><g><path class="cls-11" d="M174.86,85.61c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="171.79" y1="111.22" x2="171.79" y2="105.4"></line></g><g><rect class="cls-11" x="197.14" y="193.62" width="32.18" height="19.6" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="213.23" y1="213.22" x2="213.23" y2="229.61"></line><path class="cls-13" d="M213.17,220.39h3.63c2.05,0,3.71-1.26,3.71-2.82v-4.35"></path><path class="cls-13" d="M213.17,218.09h-4.07c-1.51,0-2.74-.93-2.74-2.09v-2.79"></path></g><g><rect class="cls-11" x="210.32" y="246.49" width="32.18" height="19.6" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="226.41" y1="266.09" x2="226.41" y2="282.48"></line><path class="cls-13" d="M226.35,273.27h3.63c2.05,0,3.71-1.26,3.71-2.82v-4.35"></path><path class="cls-13" d="M226.35,270.97h-4.07c-1.51,0-2.74-.93-2.74-2.09v-2.79"></path></g><g><rect class="cls-11" x="213.79" y="112.71" width="32.18" height="19.6" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="229.88" y1="132.3" x2="229.88" y2="148.7"></line><path class="cls-13" d="M229.82,139.48h3.63c2.05,0,3.71-1.26,3.71-2.82v-4.35"></path><path class="cls-13" d="M229.82,137.18h-4.07c-1.51,0-2.74-.93-2.74-2.09v-2.79"></path></g><g><rect class="cls-11" x="187.93" y="70.53" width="32.18" height="19.6" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="204.02" y1="90.13" x2="204.02" y2="106.52"></line><path class="cls-13" d="M203.95,97.31h3.63c2.05,0,3.71-1.26,3.71-2.82v-4.35"></path><path class="cls-13" d="M203.95,95.01h-4.07c-1.51,0-2.74-.93-2.74-2.09v-2.79"></path></g><g><rect class="cls-11" x="217.88" y="206.9" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="229.82" y1="223.06" x2="229.82" y2="232.01"></line></g><g><rect class="cls-11" x="149.83" y="131.01" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="161.77" y1="147.17" x2="161.77" y2="156.12"></line></g><g><rect class="cls-11" x="141.93" y="152.47" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="153.88" y1="168.63" x2="153.88" y2="177.57"></line></g><g><rect class="cls-11" x="240.06" y="232.52" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="252.01" y1="248.68" x2="252.01" y2="257.63"></line></g><g><rect class="cls-11" x="222.47" y="84.75" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="234.41" y1="100.91" x2="234.41" y2="109.86"></line></g><g><path class="cls-11" d="M318.2,165.28l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="314.69" y1="201.65" x2="314.69" y2="195.83"></line></g><g><path class="cls-11" d="M193.29,89.06c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="190.23" y1="114.67" x2="190.23" y2="108.85"></line></g><g><path class="cls-11" d="M209.55,148.47c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="206.49" y1="174.08" x2="206.49" y2="168.26"></line></g><g><path class="cls-11" d="M335.42,183.09l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="331.91" y1="219.46" x2="331.91" y2="213.64"></line></g><g><path class="cls-11" d="M186.38,139.41c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="183.32" y1="165.02" x2="183.32" y2="159.2"></line></g><g><path class="cls-11" d="M323.51,193.18l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="320" y1="229.55" x2="320" y2="223.73"></line></g><g><path class="cls-11" d="M439.25,223.69l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="435.74" y1="260.06" x2="435.74" y2="254.24"></line></g><g><path class="cls-11" d="M224.02,403.09l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="220.51" y1="439.46" x2="220.51" y2="433.64"></line></g><g><path class="cls-11" d="M246.2,389.18l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="242.69" y1="425.54" x2="242.69" y2="419.72"></line></g><g><path class="cls-11" d="M225.53,162.39c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="222.47" y1="188" x2="222.47" y2="182.18"></line></g><g><path class="cls-11" d="M141.79,197.45c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="138.72" y1="223.06" x2="138.72" y2="217.24"></line></g><g><path class="cls-11" d="M159.8,212.05c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="156.74" y1="237.66" x2="156.74" y2="231.84"></line></g><g><path class="cls-11" d="M266.33,270.79c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="263.27" y1="296.4" x2="263.27" y2="290.58"></line></g><g><path class="cls-11" d="M202.68,408.31c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="199.61" y1="433.92" x2="199.61" y2="428.1"></line></g><g><path class="cls-11" d="M180.41,444.38c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="177.35" y1="469.99" x2="177.35" y2="464.17"></line></g><g><path class="cls-11" d="M303.06,170.5c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="300" y1="196.11" x2="300" y2="190.29"></line></g><g><path class="cls-11" d="M171.74,166.81c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="168.68" y1="192.42" x2="168.68" y2="186.6"></line></g><g><path class="cls-11" d="M200.65,159.81l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="197.14" y1="196.17" x2="197.14" y2="190.35"></line></g><g><path class="cls-11" d="M188.88,173.73l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="185.37" y1="210.09" x2="185.37" y2="204.27"></line></g><g><path class="cls-11" d="M179.1,204.98l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="175.59" y1="241.35" x2="175.59" y2="235.53"></line></g><g><path class="cls-11" d="M246.01,268.64l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="242.5" y1="305.01" x2="242.5" y2="299.18"></line></g><g><path class="cls-11" d="M182.21,228.2l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="178.71" y1="264.56" x2="178.71" y2="258.74"></line></g><g><path class="cls-11" d="M139.37,412.54l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="135.86" y1="448.9" x2="135.86" y2="443.08"></line></g><g><path class="cls-11" d="M157.38,232.78l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="153.88" y1="269.14" x2="153.88" y2="263.32"></line></g><g><rect class="cls-11" x="257.02" y="243.74" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="268.96" y1="259.9" x2="268.96" y2="268.85"></line></g><g><rect class="cls-11" x="455.48" y="231.58" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="467.42" y1="247.74" x2="467.42" y2="256.69"></line></g><g><rect class="cls-11" x="440" y="246.88" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="451.94" y1="263.04" x2="451.94" y2="271.99"></line></g><g><rect class="cls-11" x="233.69" y="429.6" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="245.64" y1="445.76" x2="245.64" y2="454.71"></line></g><g><rect class="cls-11" x="281.71" y="233.77" width="28.36" height="19.19" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="295.89" y1="252.96" x2="295.89" y2="263.59"></line></g><g><rect class="cls-11" x="417.16" y="261.55" width="28.36" height="19.19" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="431.34" y1="280.75" x2="431.34" y2="291.37"></line></g><g><rect class="cls-11" x="208.76" y="444.35" width="28.36" height="19.19" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="222.94" y1="463.54" x2="222.94" y2="474.17"></line></g><g><rect class="cls-11" x="156.99" y="251.36" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="168.93" y1="267.52" x2="168.93" y2="276.46"></line></g><g><rect class="cls-11" x="146.56" y="423" width="23.88" height="16.16" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="158.5" y1="439.16" x2="158.5" y2="448.11"></line></g><g><rect class="cls-11" x="308.38" y="219.66" width="32.18" height="19.6" rx="8.08" ry="8.08"></rect><line class="cls-13" x1="324.47" y1="239.26" x2="324.47" y2="255.65"></line><path class="cls-13" d="M324.4,246.43h3.63c2.05,0,3.71-1.26,3.71-2.82v-4.35"></path><path class="cls-13" d="M324.4,244.14h-4.07c-1.51,0-2.74-.93-2.74-2.09v-2.79"></path></g><g><path class="cls-11" d="M160.25,433.63l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="156.74" y1="469.99" x2="156.74" y2="464.17"></line></g><g><path class="cls-11" d="M126.32,433.36l5.79,17.9c2.02,6.25-2.64,12.65-9.2,12.65h-.19c-6.57,0-11.23-6.41-9.2-12.66,1.85-5.7,4.02-12.38,5.79-17.89,1.1-3.41,5.91-3.41,7.01,0Z"></path><line class="cls-13" x1="122.81" y1="469.72" x2="122.81" y2="463.9"></line></g><g><path class="cls-11" d="M141.46,448.15l4.9,15.15c1.71,5.29-2.23,10.7-7.79,10.7h-.16c-5.56,0-9.5-5.42-7.78-10.71,1.57-4.83,3.4-10.47,4.9-15.14.93-2.88,5-2.88,5.93,0Z"></path><line class="cls-13" x1="138.49" y1="478.91" x2="138.49" y2="473.99"></line></g><g><path class="cls-11" d="M151.56,469.04c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="148.5" y1="494.65" x2="148.5" y2="488.83"></line></g><g><path class="cls-11" d="M461.91,264.77c1.13,3.49,2.4,7.43,3.51,10.86,1.43,4.42-1.87,8.94-6.51,8.94h-.13c-4.65,0-7.94-4.53-6.51-8.95,1.11-3.43,2.39-7.36,3.51-10.85.96-2.97,5.16-2.97,6.12,0Z"></path><line class="cls-13" x1="458.85" y1="290.38" x2="458.85" y2="284.56"></line></g></g><g id="click_house"><path class="cls-17" d="M501.02,221.89v92.19c0,2.77-2.25,5.02-5.02,5.02h-8.93c-2.77,0-5.02,2.25-5.02,5.02v10.86c0,2.77-2.25,5.02-5.02,5.02h-31.03v-12c0-2.76,2.24-5,5-5h7c2.76,0,5-2.24,5-5v-16c0-1.41-.59-2.69-1.53-3.61l9.67-55.39h6.86c2.76,0,5-2.24,5-5v-11.11c0-2.76,2.24-5,5-5h13.02Z"></path><path class="cls-17" d="M158.98,123l-11.51,55.62-19.1,18.38h-9.39c-2.75,0-4.98,2.23-4.98,4.98v13.04c0,2.75-2.23,4.98-4.98,4.98h-29.02v-95c0-2.76,2.24-5,5-5h10c2.76,0,5-2.24,5-5v-35h49.02c2.75,0,4.98,2.23,4.98,4.98v33.04c0,2.75,2.23,4.98,4.98,4.98Z"></path><path class="cls-17" d="M245.09,320l-2.63,32.37c-.21,2.62-2.39,4.63-5.01,4.63h-15.42c-2.78,0-5.03,2.25-5.03,5.03h-32.56v-7.06h-44.44v-29.99c0-2.75,2.23-4.98,4.98-4.98h10.04c2.75,0,4.98-2.23,4.98-4.98v-24.04c0-2.75,2.23-4.98,4.98-4.98h33.04c2.75,0,4.98-2.23,4.98-4.98l42.09,38.98Z"></path><path class="cls-17" d="M437,227.94v4.01c0,2.79-2.26,5.05-5.05,5.05h-9.9c-2.79,0-5.05,2.26-5.05,5.05v37.57l-17,.38h-60v-20l18.88-58.07c.84.67,1.91,1.07,3.06,1.07h30.12c2.73,0,4.94,2.21,4.94,4.94v10.12c0,2.73,2.21,4.94,4.94,4.94h30.12c2.73,0,4.94,2.21,4.94,4.94Z"></path><path class="cls-17" d="M265.06,464.17v-23.98l54.94-.19v-40h40v-20h20v-60h42.32l-.1,20h0c-2.79,0-5.06,2.27-5.06,5.06v29.88c0,2.79-2.27,5.06-5.06,5.06h-7.04c-2.79,0-5.06,2.27-5.06,5.06h0v9.88c0,2.79-2.27,5.06-5.06,5.06h-9.88c-2.79,0-5.06,2.27-5.06,5.06h0v9.88c0,2.79-2.27,5.06-5.06,5.06h-9.88c-2.79,0-5.06,2.27-5.06,5.06h0v34.05c0,2.79-2.27,5.06-5.06,5.06h-89.88Z"></path></g></g></svg> `;
    if (showDirect) {
      $$payload2.out += "<!--[-->";
      Direct($$payload2, {
        get showDirect() {
          return showDirect;
        },
        set showDirect($$value) {
          showDirect = $$value;
          $$settled = false;
        },
        get play() {
          return play;
        },
        set play($$value) {
          play = $$value;
          $$settled = false;
        },
        content: "Click the map to choose sector"
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { choice });
  pop();
}
function TataRuang($$payload, $$props) {
  let index = $$props["index"], area = fallback($$props["area"], 0);
  let play = false;
  let dialog;
  let choice = "";
  if (choice) {
    dialog.showModal();
    if (choice == "forest area") {
      area = 0;
    } else if (choice == "indigenous land") {
      area = 0;
    } else if (choice == "farmland area") {
      area = 1;
    } else if (choice == "coastal area") {
      area = 2;
    } else if (choice == "settlement area") {
      area = 3;
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="svelte-2f55ce">`;
    Map$1($$payload2, {
      get choice() {
        return choice;
      },
      set choice($$value) {
        choice = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <dialog class="svelte-2f55ce"><p>You have selected the <strong>${escape_html(choice)}</strong></p> <button class="svelte-2f55ce">Change Location</button> <button class="svelte-2f55ce">Continue</button></dialog> `;
    ButtonAudio($$payload2, { play });
    $$payload2.out += `<!----></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { index, area });
}
function SVGBackground($$payload) {
  $$payload.out += `<path id="bg-2" fill="#F1F1C0" d="M0,60.7s28.6-12.26,62.26-7.15,64.88,38.98,113.31,35.4,49.13-12.12,70.32-13.53c32-2.13,54.12,4.09,54.12,4.09v147.96H0V60.7Z"></path><rect id="bg-1" fill="transparent" y="227.47" width="300" height="72.53"></rect>`;
}
function SVGPolice($$payload, $$props) {
  let state = $$props["state"];
  $$payload.out += `<path id="police-outline"${attr("fill", state == 1 ? "red" : "black")} d="M48.97,257.26c-1.35,0-2.78-.29-3.59-.53-.63-.19-1.01-.38-1.28-.58-.04,0-.09,0-.13,0-.11,0-.24-.02-.34-.05-.12-.04-1.43-.57-1.43-.57-.35-.14-.59-.47-.62-.85l-.09-1.23c-6.39,2.56-14.85,3.36-15.23,3.39-.03,0-.06,0-.09,0-.24,0-.48-.09-.66-.25-.21-.18-.33-.44-.34-.71v-.18c-.34.04-.69.07-1.07.07-.72,0-1.41-.08-1.98-.17-.25.47-.88.88-2.03,1.32-.58.22-1.31.33-2.16.33-1.35,0-2.74-.27-3.59-.53-.63-.19-1.01-.38-1.28-.58-.04,0-.09,0-.13,0-.11,0-.24-.02-.34-.05-.12-.04-1.43-.57-1.43-.57-.35-.14-.59-.47-.62-.85l-.11-1.53c0-.11,0-.22.03-.32l-.23-2.21-.92-10.27c-.01-.16,0-.32.07-.46l-2.71-36.87-.15-4.05-.51-10.01c-1.18-4.01-1.88-8.26-2.06-9.48-.62-4.05,2.04-8.05,3.79-9.29.61-.69,1.28-1.33,1.95-1.92,0,0-.23,0-.23,0-.28,0-.54-.02-.76-.07-.88-.18-1.21-.72-1.33-1.03-.38-1.01.35-2.19,1.2-3.32.72-.96,1.86-3.03,3.22-5.82,0-.05,0-.09.01-.14.71-6.09,4.82-6.75,6.56-6.75,1.29,0,2.42.3,3.14.56,1.45.51,2.5,1.66,3.02,3.27.24.09.47.28.59.5.15.27.41,1.2.24,1.72-.01.04-.02.07-.04.1.26,1.5.44,4,.41,5.73,0,.12-.02.26-.03.38-.21,1.42-1.38,2.37-3.2,2.67.46.31,1.04.76,1.67,1.39l14.16-1.05c.07-.82.65-1.72,1.29-2.58.72-.96,1.86-3.03,3.22-5.82,0-.05,0-.1.01-.15.71-6.08,4.82-6.74,6.56-6.74,1.29,0,2.42.3,3.14.56,1.45.51,2.5,1.66,3.02,3.27.24.09.47.29.59.5.15.27.41,1.2.24,1.72-.01.03-.02.07-.04.1.26,1.5.44,4,.41,5.74,0,.12-.02.26-.03.38-.21,1.42-1.38,2.37-3.2,2.68.46.31,1.04.76,1.67,1.39l8.63-.64c-.07-.11-.12-.23-.16-.35-.24-.8.12-1.73,1.23-3.21.72-.96,1.89-3.07,3.22-5.82,0-.05,0-.1.02-.15.68-5.86,4.4-6.74,6.55-6.74,1.29,0,2.42.3,3.15.56,1.45.51,2.5,1.65,3.02,3.27.24.09.47.28.59.5.15.27.41,1.2.24,1.72-.01.03-.02.07-.04.1.26,1.49.44,4,.41,5.74,0,.32-.05.58-.13.82-.06.2-.16.41-.28.61-.04.06-.08.11-.13.18-.05.08-.15.17-.21.22-.15.17-.26.28-.38.38-.09.07-.2.14-.31.2l-.13.08c-.11.07-.22.13-.35.19-.11.05-.22.08-.33.12l-.16.05c-.12.04-.23.08-.35.11-.1.03-.22.04-.33.06l-.2.03c-.11.02-.22.04-.33.05,0,0,0,0-.01,0,.92.59,2.47,1.81,3.9,4.09.1.05.19.12.26.21l8.57,9.49,2.57-.39.58-15.33c.02-.54.46-.96,1-.96h25.27c.28,0,.55.12.74.33.19.21.28.49.25.77l-8.79,85.14c-.04.36-.27.67-.6.82-2.71,1.16-7.32,1.75-13.72,1.75h0c-2,0-3.76-.06-4.94-.12.01.07.01.14.01.21-.02.44-.35,1.9-3.63,2.02-.27.01-.54.01-.8.01-2.15,0-3.74-.31-4.02-.37-.14.07-.3.11-.46.11-.07,0-.15,0-.22-.02l-2.57-.58c-.44-.1-.76-.48-.78-.93l-.1-1.99c0-.11,0-.21.04-.32l-.32-11.01c0-.18.04-.36.12-.51-.33-3.83-.49-6.22-.49-7.12,0-1.41-1.1-8.57-1.97-13.99-.03,1.42-.05,2.72-.05,3.37,0,.45-.05,1.78-.15,4.06.13.65.2,1.36.2,2.11,0,1.61-.19,3.28-.52,4.59-.22,4.42-.44,8.51-.44,8.51,0,.12-.03.23-.08.34l-.41,3.65-.07,6.05c2.84,1.82,3.11,2.51,3.23,2.81.03.07.05.14.06.2.01.03.02.06.03.09l.33,1.06c.05.17.06.34.02.51-.13.6-.76,1.07-2.11,1.59-.58.22-1.3.33-2.15.33-1.34,0-2.72-.27-3.56-.53-.62-.19-1-.38-1.26-.58-.04,0-.08,0-.13,0-.11,0-.25-.02-.35-.06-.09-.03-1.01-.41-1.31-.53-5.81,1.76-12.01,2.34-12.28,2.36-.03,0-.06,0-.09,0-.24,0-.48-.09-.66-.25-.21-.18-.33-.44-.34-.71v-.18c-.34.04-.69.07-1.07.07-.72,0-1.41-.08-1.98-.17-.25.48-.88.88-2.03,1.32-.58.22-1.31.33-2.16.33ZM24.91,250l-.19-4.38-.45,3.98c.18.11.4.25.64.4ZM55.95,250l-.19-4.38-.45,3.98c.18.11.4.25.64.4ZM88.78,247.5c.6.28,1.48.7,2.26,1.11l2.23-58.7c-1.39.54-3.4,1.12-5.68,1.12,0,0-.23,0-.35,0,.32,2.69.57,5.1.74,6.79.03.07.05.15.05.24l.4,4.08c.1.59,1.37,7.84,2.24,13.96.11.75.17,1.73.19,3.01.05,2.49-.1,6.07-.42,10.63-.18,2.54-.42,5.39-.71,8.48.03.03.07.07.1.1.18.22.25.5.21.78l-1.26,8.42Z"></path><g id="group-police"><g id="police-3"><path d="M81.82,170.54l8.93,9.89,4.53-.69-.55,8.38s-4.53,2.75-9.61,1.65c-5.08-1.1-3.3-19.23-3.3-19.23Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M70.97,165.39s-4.17,2.4-6.73,5.52c-2.56,3.11-.11,30.21-.11,30.21l23.09-.73s-1.74-19.78-3.94-26.28c-2.2-6.5-6.1-8.07-6.1-8.07,0,0-5.16-.86-6.21-.65Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M71.59,163.33s-.48,1.79-.62,2.06c0,0,3.47,1.37,6.21.65l-.24-1.85s-4.84-.96-5.36-.86Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M68.77,178.91s-2.96,13.16-1.5,20.34l-3.43.13-.59-14.31s1.46-8.25,5.53-6.16Z" style="fill: #00688c;"></path><path d="M75.99,164.43c-.16,0-.36,0-.58-.02-1-.06-2.55-.29-3.86-1.09-1.28,1.71-4.07,3.32-5.58,3.37-.4.02-.7-.02-.92-.09-.82-.29-.49-1.21.65-2.72,1.09-1.46,2.69-4.68,3.41-6.16,0-.1.01-.2.02-.3.76-6.52,5.63-6.31,8.38-5.35,2.75.96,2.68,4.39,2.68,4.39.41,4.88-2.47,7.96-4.19,7.96Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M81.04,162.44c0,.19-.03.37-.08.52-.05.15-.11.28-.19.4-.02.03-.03.05-.06.08-.96,1.39-3.9,1.3-4.94.96-1.23-.41-1.32-5.09-2.01-5.73-.63-.59-.68-1.9-.69-2.12v-.03l1.37-.23s5.4-.55,5.81-.55.82,4.26.77,6.69Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M73.31,155.99s7.12-.66,7.21-.64c.09.02.25.82.21.96-.05.14-7.03.8-7.44.69-.41-.11-.39-.6-.39-.76s.41-.25.41-.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M73.99,192.24l5.54-12.9c.28-.65,1.03-.94,1.67-.66h0c.64.28.93,1.04.64,1.68l-8.14,18.07c-.22.48-.8.68-1.27.44h0c-.41-.21-.6-.7-.44-1.13l1.99-5.49Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M62.52,188.53l4.26,1.3-2.4,6.04s-4.68,0-7.91-2.21c-.87-.59-1.64-1.35-2.18-2.32-.57-1.01-.51-2.52-.07-4.27h0c1.53-6.05,7.7-14.92,8.65-15.78.01-.01.02-.02.04-.03,1.43-1.24,3.64-.87,4.71.69.85,1.25,1.75,3.13,1.64,5.45-.21,4.33-6.73,11.13-6.73,11.13Z" style="fill: #005d8a;"></path><path d="M76.24,194.03c-.41.23-.05,1.33-.64,1.65s-.59.87-1.05,1.19c-.45.32-2.33-.32-3.02-.64s-4.9.27-8.15.09c0,0,.03-.49.13-1.23.22-1.59.74-4.33,1.92-5.86l6.59,2.02s.69-.64,1.28-.69,1.37.27,1.6,1.33c0,0,1.01.36,1.47.68.45.32.27,1.24-.14,1.47Z" style="fill: #062b3d;"></path><path d="M87.45,202.26l-23.11.87-.51-3.76,3.02-.16s0,0,0,0l20.18-1.07.24,2.42.17,1.7Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M89.45,229.65c-.59,8.31-1.58,16.97-1.58,16.97h-5.31s-.31-3.21-.62-6.76c-.33-3.7-.66-7.76-.66-8.98,0-2.38-2.74-18.77-2.74-18.77l-1.1-.73s-.18,7.05-.18,8.88-.91,19.22-.91,19.22l-6.77,7.7s-.27-1.72-.64-4.17c-.66-4.28-1.64-10.76-2.11-14.14-.71-5.14-2.37-24.46-2.46-25.67v-.06s3.09-.12,3.09-.12l20.02-.76s1.33,7.56,2.24,13.96c.11.75.16,1.72.17,2.88.05,2.81-.14,6.64-.42,10.55Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M68.91,243c-.66-4.28-1.64-10.76-2.11-14.14-.71-5.14-2.37-24.46-2.46-25.67v-.06s3.09-.13,3.09-.13c0,0,0,0,0,.01-1.77,9.14,1.57,30.83,2.35,36.01.35,2.28-.17,3.42-.87,3.98Z" style="fill: #034b68;"></path><path d="M68.55,239.12h7.78l-1.19,10.62s3.57,2.11,3.94,3.02c.37.92-1.65,1.65-4.21,1.46-2.56-.18-5.04-1.37-5.04-1.37l-.37-3.48-.92-10.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M81.64,238.47l7.42.46-1.37,9.16s3.39,1.56,4.3,2.2c.92.64-1.01,1.92-4.03,1.65-3.02-.27-5.95-.92-5.95-.92l-.37-12.54Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M120.55,163.68l-2.37,22.96-.91,8.87-5.31,51.4-.2,1.92c-5.77,2.48-19.78,1.47-19.78,1.47l3.3-86.61h25.27Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M61.83,189.05s-.44,1.7-3.64,1.36l3.64-1.36Z" style="fill: #034b68;"></path><path d="M56.47,193.67c-.87-.59-1.64-1.35-2.18-2.32-.57-1.01-.51-2.52-.07-4.27.13.07,1.81,1.06,2.42,3.48.36,1.45.12,2.49-.16,3.1Z" style="fill: #062b3d;"></path><path d="M71.92,192.21l-1.07,3.4s-.68-2.48,1.07-3.4Z" style="fill: #051e28;"></path><path d="M76.24,194.03c-.41.23-.05,1.33-.64,1.65s-.59.87-1.05,1.19c-.45.32-2.33-.32-3.02-.64s-4.9.27-8.15.09c0,0,.03-.49.13-1.23l7.15.09s2.33.97,3.1,1.02c.78.05.83-.63,1.36-1.26l.53-.63-.87-.58,1.07-.15.52-1.01c.45.32.27,1.24-.14,1.47Z" style="fill: #051e28;"></path><path d="M89.45,229.65c-.09.41-.15.63-.15.63,0,0-3.64-2.69-2.7-6.41.75-2.93,2.55-4.32,3.26-4.78.05,2.81-.14,6.64-.42,10.55Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M71.46,225.12s.51-2.26,2.55-3.13,3.28,1.31,3.28,4.44-.73,6.26-1.75,6.63-4.95-.22-4.08-7.94Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="118.18 186.64 117.26 195.51 100.66 194.98 99.93 186.38 118.18 186.64" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M69.75,251.99l.11,1.53s1.24.51,1.35.55c.11.04.22-.15.4-.11.18.04.11.36,1.31.73,1.2.36,3.64.76,5.06.22,1.42-.55,1.49-.87,1.49-.87l-.33-1.06s-3.71,2.29-9.39-.98Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M81.92,249.78s.87.83,4.71,1.21c3.83.39,4.42.24,5.58-.49l.29,1.02s-.05.97-2.67,1.07-4.61-.34-4.61-.34l-.29-.44-.34.53-2.57-.58-.1-1.99Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g><g id="police-2"><polygon points="44.82 202.88 47.64 241.24 55.29 241.43 57.59 203.17 44.82 202.88" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M47.65,239.5h7.78l-1.19,10.62s3.57,2.11,3.94,3.02-1.65,1.65-4.21,1.46-5.04-1.37-5.04-1.37l-.37-3.48-.92-10.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="38.7 202.95 41.52 241.31 49.17 241.5 51.47 203.24 38.7 202.95" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M48.63,251.6l.11,1.53s1.25.51,1.36.55c.11.04.22-.15.4-.11s.11.36,1.32.73c1.21.36,3.68.76,5.11.22,1.43-.55,1.51-.87,1.51-.87l-.33-1.06s-3.75,2.29-9.49-.98Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M45.87,165.78s-4.17,2.4-6.73,5.52c-2.56,3.11-.27,30.21-.27,30.21l18.72-1.13s2.8-19.38.6-25.88c-2.2-6.5-6.1-8.07-6.1-8.07,0,0-5.16-.86-6.21-.65Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M46.49,163.72s-.48,1.79-.62,2.06c0,0,3.47,1.37,6.21.65l-.24-1.85s-4.84-.96-5.36-.86Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M50.69,165.01c-.87,0-2.83-.13-4.44-1.11-1.28,1.71-4.07,3.32-5.58,3.38-.29.01-.54,0-.73-.05-1.04-.21-.76-1.15.46-2.77,1.09-1.46,2.69-4.68,3.41-6.16,0-.1.01-.19.02-.29.76-6.52,5.63-6.32,8.38-5.36,2.75.96,2.68,4.4,2.68,4.4.41,4.88-2.47,7.96-4.19,7.96Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M55.75,163.01c0,.09-.01.18-.02.26-.32,2.16-4.05,2.1-5.24,1.71-1.23-.41-1.32-5.08-2.01-5.72s-.69-2.16-.69-2.16l1.37-.23s.4-.04.99-.1c1.58-.16,4.52-.45,4.82-.45.41,0,.82,4.26.77,6.68Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M41.34,240.26l7.99-.14-1.4,10.76s3.57,2.11,3.94,3.02c.37.92-1.65,1.65-4.21,1.46-2.56-.18-5.04-1.37-5.04-1.37l-.37-3.48-.92-10.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M55.34,188.88l-.32,7.4s-3.91.76-7.68.86c-1.65.04-3.27-.04-4.53-.38-1.1-.3-2.07-1.48-2.91-3.11,0,0,0-.01,0-.02-2.3-4.47-3.61-12.27-3.91-14.29-.67-4.4,3.05-8.92,4.3-8.66,0,0,1.74.57,4.43,6.71s2.54,11.65,2.54,11.65l8.09-.16Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="38.55 198.94 57.92 199.51 57.63 203.67 38.7 202.95 38.55 198.94" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M76.71,166.89l-.2,18.12-.09,7.57-.62,54.07-.05,4.03c-5.93,4.02-18.55,5.17-18.55,5.17l-3.83-87.23,3.7-.27,19.63-1.45Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="76.51 185.01 76.42 192.58 64 193.81 62.26 186.53 76.51 185.01" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M47.34,197.13c-1.65.04-3.27-.04-4.53-.38-1.1-.3-2.07-1.48-2.91-3.11,0,0,0-.01,0-.02-.18-.54-.28-.91-.28-.91,0,0,1.75-.72,4.3,0,2.17.62,3.17,3.55,3.43,4.42Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M42.46,253.08l.11,1.53s1.25.51,1.36.55.22-.15.4-.11.11.36,1.32.73,3.68.76,5.11.22c1.43-.55,1.51-.87,1.51-.87l-.33-1.06s-3.75,2.29-9.49-.98Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M50.29,220.17s.65,3,.03,6.95-1.16,4.53-2.36,4.06c-1.2-.47-2.05-3.69-1.83-7.66.21-3.97,2.93-6.99,4.16-3.35Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M48.01,156.56s7.12-.66,7.21-.64c.09.02.25.82.21.96-.05.14-7.03.8-7.44.69-.41-.11-.39-.6-.39-.76s.41-.25.41-.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g><g id="police-1"><polygon points="13.78 202.88 16.6 241.24 24.25 241.43 26.55 203.17 13.78 202.88" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M16.61,239.5h7.78l-1.19,10.62s3.57,2.11,3.94,3.02-1.65,1.65-4.21,1.46-5.04-1.37-5.04-1.37l-.37-3.48-.92-10.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="7.66 202.95 10.48 241.31 18.13 241.5 20.42 203.24 7.66 202.95" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M17.59,251.6l.11,1.53s1.25.51,1.36.55c.11.04.22-.15.4-.11s.11.36,1.32.73,3.68.76,5.11.22c1.43-.55,1.51-.87,1.51-.87l-.33-1.06s-3.75,2.29-9.49-.98Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M14.83,165.78s-4.17,2.4-6.73,5.52c-2.56,3.11-.27,30.21-.27,30.21l18.72-1.13s2.8-19.38.6-25.88c-2.2-6.5-6.1-8.07-6.1-8.07,0,0-5.16-.86-6.21-.65Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M15.45,163.72s-.48,1.79-.62,2.06c0,0,3.47,1.37,6.21.65l-.24-1.85s-4.84-.96-5.36-.86Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M19.65,165.01c-.87,0-2.83-.13-4.44-1.11-1.28,1.71-4.07,3.32-5.58,3.38-.29.01-.54,0-.73-.05-1.04-.21-.76-1.15.46-2.77,1.09-1.46,2.69-4.68,3.41-6.16,0-.1.01-.19.02-.29.76-6.52,5.63-6.32,8.38-5.36,2.75.96,2.68,4.4,2.68,4.4.41,4.88-2.47,7.96-4.19,7.96Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M24.71,163.01c0,.09-.01.18-.02.26-.32,2.16-4.05,2.1-5.24,1.71-1.23-.41-1.32-5.08-2.01-5.72s-.69-2.16-.69-2.16l1.37-.23s.4-.04.99-.1c1.58-.16,4.52-.45,4.82-.45.41,0,.82,4.26.77,6.68Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M10.3,240.26l7.99-.14-1.4,10.76s3.57,2.11,3.94,3.02-1.65,1.65-4.21,1.46c-2.56-.18-5.04-1.37-5.04-1.37l-.37-3.48-.92-10.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M24.3,188.88l-.32,7.4s-3.91.76-7.68.86c-1.65.04-3.27-.04-4.53-.38-1.1-.3-2.07-1.48-2.91-3.11,0,0,0-.01,0-.02-2.3-4.47-3.61-12.27-3.91-14.29-.67-4.4,3.05-8.92,4.3-8.66,0,0,1.74.57,4.43,6.71,2.7,6.14,2.54,11.65,2.54,11.65l8.09-.16Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="7.51 198.94 26.88 199.51 26.59 203.67 7.66 202.95 7.51 198.94" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M45.67,166.89l-.2,18.12-.09,7.57-.62,54.07-.05,4.03c-5.93,4.02-18.55,5.17-18.55,5.17l-3.83-87.23,3.7-.27,19.63-1.45Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="45.47 185.01 45.38 192.58 32.96 193.81 31.21 186.53 45.47 185.01" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M16.3,197.13c-1.65.04-3.27-.04-4.53-.38-1.1-.3-2.07-1.48-2.91-3.11,0,0,0-.01,0-.02-.18-.54-.28-.91-.28-.91,0,0,1.75-.72,4.3,0,2.17.62,3.17,3.55,3.43,4.42Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M11.42,253.08l.11,1.53s1.25.51,1.36.55.22-.15.4-.11.11.36,1.32.73,3.68.76,5.11.22c1.43-.55,1.51-.87,1.51-.87l-.33-1.06s-3.75,2.29-9.49-.98Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M19.25,220.17s.65,3,.03,6.95-1.16,4.53-2.36,4.06-2.05-3.69-1.83-7.66c.21-3.97,2.93-6.99,4.16-3.35Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M16.97,156.56s7.12-.66,7.21-.64c.09.02.25.82.21.96-.05.14-7.03.8-7.44.69-.41-.11-.39-.6-.39-.76s.41-.25.41-.25Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g></g>`;
  bind_props($$props, { state });
}
function SVGProtester($$payload, $$props) {
  let state = $$props["state"];
  $$payload.out += `<path id="protester-outline"${attr("fill", state == 2 ? "red" : "black")} d="M200.83,257.68c-.34,0-.73-.03-1.18-.09-1.55-.21-2.37-.47-2.58-1.35-.36-1.47-.06-2.25.33-2.65.29-.51.68-1.17.84-1.46l.67-3.09-.43-1.26c-1.73-.12-2.66-.52-2.77-.57-.3-.14-.52-.41-.58-.74l-.44-2.52c-.04-.25.01-.51.15-.72l-7.15-23.54.24,23.77-.15,2.61c-.03.46-.36.84-.81.92-.05,0-1.01.2-2.24.37l-.11,1.39c.06.1.1.2.13.32.02.08.39,1.85.6,3.26.02.06.04.12.05.19.17.96.26,1.56.26,1.78,0,1.14-.62,1.14-4.65,1.14-6.86,0-7.16-.25-7.42-.47-.7-.58-.76-1.76-.15-2.65.06-.15.13-.29.21-.42.16-.27.5-.83,4.3-2.05l1.28-.98-.15-1.43c-1.4-.29-2.31-.74-2.35-.76-.35-.17-.57-.54-.55-.93l.08-2.7c0-.3.15-.57.38-.75l-1.94-37.1c-.07-.01-.1-.02-.1-.02-.41-.11-.74-.48-.77-.9l-1.21-17.49c0-.29-.06-5.73.81-10.75-1.28-1.66-3.17-4.33-4.56-7.19-.89,2.33-1.65,4.15-2.26,5.42-1.42,2.97-3.96,7.06-5.47,9.4.07,1.15.09,2.22.07,3.09l-.03.64c-.16,2.47-.78,7.56-1.07,9.84,1,.77,1.9,2.22,2.05,3.2,3.13,2.22,7.97,9.92,7.23,11.84-.09.23.06.87.17,1.38.29,1.29.69,3.05-.53,4.62-.42.55-.95,1.14-1.57,1.51,1.53,7.25,3.16,16.01,3.33,19.1,2.14,7.98,1.8,8.65,1.62,9.01-.07.14-.18.58-.28.96-.27,1.06-.63,2.52-1.47,3.48-.94,1.07-1.98,1.55-3.39,1.55-.28,0-.58-.02-.89-.05-1.44-.15-2.39-.61-2.81-1.35-.29-.5-.3-1.09-.03-1.67.16-.35.43-.81.73-1.34.38-.66,1.1-1.9,1.14-2.28-.02-.3-.46-2.25-1.62-6.63-.13-.32-.39-1.18-1.31-4.25-.93-3.1-2.19-7.29-3.51-11.5-.1,0-.21,0-.32,0-1.9,0-4.53-.71-6.13-2.31,0,0-.02-.02-.03-.03-.9,8.18-1.54,17.42-1.54,17.52,0,.08-.02.17-.05.25l-.19.58-1.06,6.09c.01.53.06,2.6,0,3.43-.12,1.45-2.1,1.55-5.32,1.59-.42,0-.76,0-.94.02-.57.19-1.52.22-2.09.22-.67,0-1.63-.05-2.37-.32-.32-.11-1.29-.46-1.51-1.37-.21-.86.34-1.61.97-2.29.58-.63,1.58-1.07,2.54-1.5.56-.25,1.49-.66,1.67-.9.2-.49.48-3.55.62-6.08,0-.04-.18-9.97.17-17.8-.1.01-.19.02-.29.02-.47,0-.89-.18-1.22-.52-.86-.9-.79-2.73-.71-4.68.04-.9.08-1.92-.03-2.37-.5-1.99-.1-5.33.92-7.77.97-2.31,3.74-6.73,3.86-6.92,0,0,0,0,0-.01.04-1.1.44-2.34.62-2.86-.51-2.81-1.56-8.79-1.63-10.65,0-.22,0-.48,0-.77-.79-1.21-3.96-6.15-7.74-12.96-3.11-5.61-4.04-9.43-4.31-11.37-.88-1.01-1.09-2.39-1.12-3.36h-2.45c-.55,0-1-.45-1-1v-20.68c0-.55.45-1,1-1h29.32l1.59-16.45c.05-.5.46-.88.95-.9l46.62-1.92-.84-6.3c-.07-.53.29-1.02.82-1.12l53.01-9.32c.06-.01.12-.02.17-.02.21,0,.42.07.59.19.22.16.36.41.4.68l4.08,31.16c.07.53-.3,1.03-.83,1.12l-25.05,4.13.38,5.2c.6.09,1.03.33,1.3.71.46.66.36,1.52.26,1.99.06.35.09.91-.13,1.57-.16.48-.51.9-1.03,1.23l.62,8.5c.02.27-.07.54-.26.75-.19.2-.45.32-.72.33,0,0-1.41.02-1.42.02-.39,0-.72-.22-.89-.55-.61,2.44-1.21,4.8-1.58,6.17-.99,3.6-9.09,15.39-10.41,17.3.75,4.16,1.21,7.98,1.37,11.41.4-.17,1.46-.58,2.13-.58.45,0,1.66.33,2.72.64l6.03-2.41.27-.91c-.23-.24-.33-.59-.24-.93.64-2.56,2.94-10.78,6.04-11.73.05-.04.11-.07.16-.11-.6-.15-1.23-.35-1.65-.62-2.3-1.48-2.24-5.05-2.22-5.45.02-.51.42-.93.94-.96-.04,0,.04-.13.04-.46s.05-.68.15-1.05c-1.14-.31-1.94-.54-1.94-.54-.04-.01-.07-.02-.11-.04-1.03-.43-1.21-1.05-1.18-1.49.04-.56.46-1.02,1.06-1.17.31-.08,1.31-.09,1.88-.09.37,0,.86,0,1.38.03.92-2.53,1.62-2.94,1.86-3.08.29-.17.64-.26,1.05-.26,1.33,0,3.29.94,4.36,1.66.53.16,1.87.63,2.53,1.46.18.22.71.88.79,3.76.55,1.99,1.24,6.1,1.41,8.31,1.08.37,1.31.49,1.45.59.09.06.17.13.23.21l7.97,10.1c.7.4,1.09,1.05,1.08,1.82-.03,1.39-1.44,2.93-3.19,4.05,0,0,14.45-.18,14.46-.18.54,0,.98.43,1,.96l.89,25.18c0,.28-.09.54-.29.74-.19.19-.44.3-.71.3,0,0-13.56-.33-13.56-.33,1.83,8.37,3.79,18.76,3.98,22.11,2.14,7.97,1.8,8.65,1.62,9.01-.07.14-.19.59-.28.96-.27,1.06-.63,2.52-1.47,3.48-.94,1.07-1.98,1.55-3.38,1.55h0c-.28,0-.58-.02-.9-.05-1.44-.15-2.38-.61-2.81-1.35-.29-.5-.3-1.09-.03-1.67.16-.35.43-.81.73-1.33.38-.66,1.1-1.9,1.14-2.28-.02-.29-.46-2.24-1.62-6.63-.13-.32-.39-1.18-1.31-4.24-1.57-5.23-4.15-13.85-6.27-19.82l-2.96-.07c-1.29,8.78-2.29,23.42-2.31,23.58,0,.08-.02.17-.05.25l-.19.58-1.06,6.09c.01.53.06,2.6,0,3.43-.12,1.46-2.1,1.55-5.32,1.59-.42,0-.76,0-.94.02-.57.19-1.52.22-2.09.22s-1.42-.04-2.11-.23c-.08.11-.17.22-.24.34-.5.8-2.36,2.96-4.96,3.37-.38.06-.73.09-1.04.09-1.3,0-1.93-.51-2.23-.94-.38-.55-.43-1.26-.15-1.99.04-.1.09-.21.15-.35.24-.5.66-1.22,1.1-1.99.57-.99,1.52-2.64,1.6-3.07,0-.27-.46-1.64-.86-2.66-.09-.23-.09-.49,0-.72l-.85-2.86c-.21-.01-.41-.03-.61-.05-.38-.04-.71-.3-.83-.67l-.42-1.24-8.69-23.26.74,22.6s.02.09.03.14l.24,1.84c.06.48-.23.94-.69,1.08,0,0-.25.08-.68.19l-.14,3.36c.21.2.33.49.31.78l-.15,2.47s.04,1.27.04,2.3c.28,1.74.1,2.23-.34,2.57-.66.49-4.78.54-4.83.54-.13,0-.35,0-.61.01-.46.01-1.08.03-1.75.03-3.43,0-4.34-.38-4.76-1.04-.48-.76-.34-1.63.33-2.26.6-.98,1.96-1.77,3.23-1.84.98-.05,1.94-.45,2.47-.7l.19-1.8c.01-.1.04-.2.07-.29l-.5-3.24c-.05,0-.1,0-.16,0-.23,0-.46,0-.69-.01-.48-.02-.89-.38-.95-.86l-.25-1.76c-.28-1.37-1.71-8.61-2.66-15.89-.1-.08-.2-.18-.3-.31-.95-1.29-2.03-7.4-1.03-10.67.05-.18.16-.33.29-.45-.42-6.94-.64-14.3-.7-16.51-.25-.11-.5-.22-.75-.34-.37-.17-.59-.55-.57-.96,0,0,.09-1.77.25-4.42-1.6,1.21-3.49,2.47-5.64,3.77.37,2.29.61,4.47.71,6.5.02.45-.26.86-.69,1,0,0-.15.05-.43.13,2.25,9.01,5.92,30.68,7.22,38.48.22.15.38.38.43.65l.45,2.45c.07.38-.08.76-.39.98-.08.06-.67.48-1.75.9l.07.54.67,1.51c.03.06.05.13.06.19l.22,1.02c.02.08.03.17.02.25-.05,1.1-.3,4.77-1.57,5.91-.8.72-1.53,1.27-2.97,1.27ZM236.27,244.29c.12.15.2.33.23.53.05.45.24,1.77.49,2.52.15.44.29,1,.4,1.52.37-.19.76-.36,1.14-.53.56-.25,1.49-.66,1.67-.89.2-.49.48-3.55.62-6.08-.01-.59-.28-16.09.57-23.54l-8.5-.21c1.05,3.66.81,4.97.52,5.65-.02.05-.04.09-.06.13,1.49,6.7,3.05,13.73,3.55,15.98l.44,1.51c.08.26.04.55-.1.78-.14.24-.37.41-.64.47,0,0-.23.05-.62.13l.3,2.02ZM192.8,175.54c1.52,3.73,2.8,7.41,3.83,10.97,1.44-1.74,2.47-3.11,3.06-4.08,1.53-2.49,4.81-7.57,6.67-10.45.77-2.14,2.23-4.02,4.12-5.33.17-.23.33-.42.49-.57l-.05-.29c-.48-.15-.94-.37-1.38-.66-2.51-1.62-2.39-5.68-2.38-5.85.01-.28.05-.54.26-.72.18-.16.36-.25.58-.25.03,0,.06,0,.09,0,.03-.02.12-.21.12-.6,0-.56.13-1.16.4-1.78-.83-.56-1.4-1.36-1.5-2.16-.09-.77.25-1.47.92-1.92.63-.42,1.68-.63,3.11-.63,1.94,0,4.18.4,5.7,1.03,2.4.98,2.91,2.72,3.02,3.48.33.56.73,1.75-.09,3.79-.76,1.9-1.85,3.63-2.23,4.2v.18c.12.11.23.23.33.37l2.89.32,8.46-5.32,5.12-12.61c.13-.31.4-.54.72-.6l.06-.54c-.16-.59-.47-1.87-.36-2.6.13-.93,1.3-1.81,2.47-2.19l-.1-1.65-.23-2.22-24.78,4.08c-.05,0-.11.01-.16.01-.21,0-.42-.07-.6-.2-.22-.16-.36-.4-.4-.67l-.09-.71c-2.5.12-5.66.28-9.17.47-.05.14-.1.29-.17.44.03.1.04.21.04.31,0,.09-.39,9.07-1.49,16.16-.93,6.04-5.59,15.44-7.32,18.79ZM158.48,169.9c.17.72.29,1.56.26,2.44-.05,1.77-1.14,3.18-2.29,4.04.25-.02.91-.06.99-.07,1.49-2.16,3.96-5.84,5.63-8.89l3.83-7.76c0-.27-.01-.55-.02-.84-.09-.3-.17-.59-.22-.78l-29.07-.27c-.13.42-.31.89-.54,1.41.83,1.71,2.36,4.69,4.39,7.93,1.32,2.11,2.92,4.43,4.32,6.4-.22-1.03-.2-1.91-.19-2.09.02-.51.42-.93.94-.96-.04,0,.04-.13.04-.46,0-.96.42-1.89.84-2.57-.01-.98.46-1.84,1.29-2.33.78-.46,1.98-.74,3.21-.74.78,0,1.56.11,2.31.32.37-.84,1.12-1.57,2.39-1.78.27-.04.53-.06.77-.06,2.22,0,3.35,1.62,3.55,2.64.05.28.03.52-.03.71.49.56.94,1.28.98,2.01.03.58-.18,1.1-.61,1.51-.24.23-.68.5-1.36.5-.43,0-.91-.12-1.39-.3ZM186.6,165.16c2.94-4.57,6.2-10.43,6.91-13.75,1.11-5.15,1.8-10.9,1.81-10.96.01-.1.04-.19.07-.27-6.33.35-13.17.73-19.19,1.08v12.64c.43-.07.87-.11,1.3-.14.38-.87,1.17-2.2,2.61-2.51.32-.07.66-.1,1.01-.1,1.52,0,3.25.67,4.45,1.7.33.19,1.14.7,1.56,1.35.66,1.04.28,3.59.17,4.28.12,1.17-.15,2.46-.82,3.85-.15.36-.34.73-.56,1.05l.03,1.72.64.08ZM174.42,158.12c.07.53.11.73.13.81.06.23.33.7.82,1.39-.05-.43-.05-.71-.05-.75,0-.28.03-.54.23-.73.19-.18.36-.28.61-.28.02,0,.03,0,.05,0,.03-.02.11-.22.09-.6,0-.18,0-.36.01-.55-.05,0-.09,0-.14-.01-.05.17-.14.32-.26.44-.19.19-.44.29-.7.29,0,0-.79,0-.79,0Z"></path><g id="group-protester"><g id="protester-4"><path d="M200.1,248.25l-.92,4.24s-.82,1.39-1.15,1.99c-.33.6.79,1.39,2.23,1.59,1.45.19,2.45-.56,2.76-.88s1.11-2.56,1.13-3.6c.02-1.04,0-2.15,0-2.15l-1.03-2.32-3.03,1.13Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M217.44,116.39l-.96,16.04-.34,5.73c-6.12.09-57.12,3.08-57.12,3.08l1.24-12.82.94-9.72,56.24-2.31Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="179.72 244.24 180.27 249.32 183.58 249.32 184.03 243.46 179.72 244.24" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M178.41,250.74s-3.6,1.15-3.91,1.67c-.32.52-.4,1.34-.12,1.5.28.16,4.71.07,6.41.14,1.7.08,3.3.05,3.64.02.34-.03-.66-4.79-.66-4.79l-3.5.04-1.86,1.42Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M198.01,243.33l2.06,6.03c.58.48,2.49.34,3.39-1.27l-.7-5.68-4.75.92Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M204.96,244.31c-.4.26-.8.47-1.2.65-3.62,1.53-7.42-.22-7.42-.22l-9.72-32.02.16,32.17-3.75.46c-3.74.46-5.33-1.43-5.33-1.43l-2.03-38.81-.11-2.11s.53-.23,1.42-.57c3.91-1.54,14.81-5.46,18.47-3.08.45.28.79.66.99,1.16,2.26,5.45,8.52,43.8,8.52,43.8Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M179.81,167.22s-5.79-6.34-6.23-8.04c-.44-1.69-1.35-16.1-1.35-16.1l-3.96.73s-.81,13.96-.13,19.67c.68,5.71,7.14,13.28,7.14,13.28l4.52-9.55Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M198.49,202.44s-1.13.37-2.94.82c-2.94.72-7.67,1.63-12.31,1.46-7.5-.28-8.43-.51-8.43-.51l-1.21-17.49s-.12-10.46,2.22-15.59c2.34-5.14,7.04-5.39,7.04-5.39l4.56.54s1.63,2.99,3.63,7.68c3.03,7.08,6.93,18.03,7.44,28.49Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M186.21,156.73c-.14-1.46-4.79-4.01-7.68-2.01,0,0-1.31,1.66-1.24,3.19.08,1.52-.98,1.64-.98,1.64,0,0,.05,3.65,2.17,4.88.58.33,1.16.52,1.74.6l.87,3.72c2.17-.37,3.9-1.86,3.9-1.86l-.06-3.83c1.41-1.71,1.41-4.99,1.28-6.34Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M181.44,156.95s-.19,1.08.23,1.64c.42.56.68.55.68.55l-.13.78.57.24s.26-1.11.84-1.21c.58-.1.94,1.29.52,2.19-.42.9-1.32.75-1.32.75l2.1,1.18s1.68-2.37,1.37-4.63l-4.86-1.49Z"></path><path d="M174.13,156.24s1.49,0,4.95.52c3.45.52,5.12,1.13,5.12,1.13,0,0-2.23-2.26-4.41-2.95-2.19-.69-7.23.51-5.66,1.3Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M178.21,154.76s.62-2.22,2.13-2.55c1.51-.33,3.48.37,4.67,1.44,0,0,.94.5,1.29,1.07s.24,2.58,0,3.72l-2.25-.62-5.84-3.06Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M186.77,166.74s6.6-9.86,7.73-15.12c1.13-5.26,1.83-11.05,1.83-11.05l4.29-.02s-.38,8.93-1.47,16.05c-1.1,7.12-7.71,19.41-7.71,19.41,0,0-6.3-2.68-4.66-9.27Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M177.24,243.08s.9.59,3.52.74c2.62.15,6.17-.35,6.17-.35l-.15,2.55s-4.16.81-6.19.64c-2.03-.17-3.43-.88-3.43-.88l.09-2.7Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M195.67,243.78s2.93.76,4.78.48c1.85-.28,4.58-1.43,4.58-1.43l.45,2.45s-1.64,1.25-4.73,1.49c-3.09.25-4.64-.47-4.64-.47l-.44-2.52Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M196.89,140.58l-.32-.98s-.73-1.23-.8-2.19c-.06-.96-.41-1.64.14-1.6s1.4,3.23,1.4,3.23l3.63-.16s-.07.87-.74,1.76l-3.32-.07Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M172.04,143.02v-1.27s.64-.48.87-1.53c.24-1.05.63-2.19.37-2.6-.26-.41-.88.65-1.09,1.32-.2.66-.56,1.37-.56,1.37l-3.83.35s.09,1.27.39,1.69.61,1.37.61,1.37c0,0,2.72-.45,3.23-.7Z" style="fill: #ff7c53;"></path><path d="M174.32,252.79s5,.92,10.1-.1c0,0,.24,1.36.24,1.6s-10.15.15-10.44-.1-.29-.92.1-1.41Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M198.22,254.19s-.38,1.23,2,1.18c2.38-.05,3.28-1.81,3.33-2.63.05-.83.61-3.3.61-3.3l.22,1.02s-.18,4.26-1.24,5.21c-.93.83-1.46,1.18-3.35.93-1.68-.23-1.71-.46-1.75-.6-.38-1.57.18-1.8.18-1.8Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g><g id="protester-3"><polygon points="212.76 243.03 213.71 249.15 217.13 249.15 217.42 242.38 212.76 243.03" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><polygon points="230.06 241.87 232.2 249.05 235.99 249.25 234.82 241.29 230.06 241.87" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M213.37,247.94l4.17-.44-.15,2.48s.1,3.54,0,3.69c-.1.15-7.86.78-9.56.24-1.7-.53.19-2.48,1.94-2.57,1.75-.1,3.35-1.07,3.35-1.07l.24-2.33Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M236.81,251.33c.09.77-.63,1.26-1.12,2.04s-2.14,2.57-4.27,2.91c-2.14.34-2.72-.48-2.33-1.5.03-.08.07-.17.12-.28.63-1.31,2.79-4.68,2.79-5.4,0-.78-.93-3.11-.93-3.11l4.42-1.07s.19,1.7.53,2.72c.2.59.4,1.48.55,2.27.11.57.19,1.09.23,1.42Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="238.18 139.02 239.13 155.62 240.53 155.6 239.06 135.39 237.8 135.43 238.18 139.02" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M190.89,195.53l-.97.92s-3.45,1.89-3.59,2.18.05,1.7.34,2.23c.29.53,1.55.53,1.84.53s.49-.29.49-.29c0,0,.58.39,1.17.19.58-.19.97-1.46.92-2.14l1.7-1.21-1.89-2.43Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M235.99,147.13l.19-1.7s-.49-1.7-.39-2.38c.1-.68,2.04-1.84,3.06-1.46,1.02.39.39.92.39.92,0,0,1.41-.19,1.75.29.34.49.05,1.41.05,1.41,0,0,.19.53-.05,1.26s-1.41,1.17-2.14,1.21l-.29,1.36-2.57-.92Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M208.03,187.52c-.66.77-1.47,1.56-2.37,2.32-5.08,4.36-13.07,8.35-13.07,8.35l-.8-1.21-1.33-2s7.77-8.25,10.1-12.04,8.64-13.49,8.64-13.49c0,0,3.2,12.91-1.17,18.06Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M218.19,156.98c-.07-1.46-4.58-4.25-7.57-2.39,0,0-1.39,1.59-1.39,3.12s-1.06,1.59-1.06,1.59c0,0-.13,3.65,1.93,4.98.56.36,1.13.58,1.71.69l.68,3.76c2.19-.27,3.98-1.66,3.98-1.66l.13-3.83c1.49-1.64,1.66-4.91,1.6-6.26Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M215.65,158.8s.31-.44.93-.31.53,1.77-.13,2.74c-.66.97-1.24.71-1.24.71l1.42,1.42s1.37-1.99,2.26-4.2c.89-2.21.04-3.05.04-3.05,0,0,.04-1.9-2.43-2.92-2.48-1.02-6.68-1.28-7.88-.49-1.19.8-.04,2.39,1.5,2.88s4.2.84,4.2.84c0,0-1.5,1.99-.04,2.83l-.13.89.8.31.71-1.64Z"></path><path d="M236.09,240.33c-2.82,1.26-7.48.78-7.48.78l-11.07-29.62.97,29.68v.13c-3.78.87-7.57.48-7.57.48,0,0-2.14-10.39-3.1-19.42-.97-9.03-1.36-25.24-1.36-25.24,4.47-1.56,18.55-.49,18.55-.49l.68,3.79s3.3,8.06,5.34,17.18c2.04,9.13,5.05,22.72,5.05,22.72Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M209.19,200.43s3.91.97,6.98.97,7.49-1.26,7.49-1.26" style="fill: none; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M226.57,197.03s-1.08.42-2.87.86c-3.98.97-11.5,2.02-18.54-1.29,0,0,.72-13.74,1.6-21.91.33-3.09,2.07-5.86,4.71-7.5l.63-.39s3.9-.77,4.53-1.65l4.4.48h0l.92.1s1.46,4.77,2.77,11.17c.15.74.3,1.5.44,2.29,1.05,5.69,1.84,12.27,1.4,17.85Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M210.84,241.21s5.53-.19,7.67-.78l.24,1.84s-3.69,1.17-7.62,1.02l-.29-2.09Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M228.17,239.9s5.39-.15,7.57-.92l.63,2.18s-4.17.97-7.57.58l-.63-1.84Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M226.86,213.83l3.59-.29s2.91,7.28,2.04,9.32-5.63-3.69-5.63-9.03Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M206.86,215.09l1.46.1s.39,9.22-.29,9.81c-.68.58-2.23-6.41-1.17-9.9Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="265.01 131.21 212 139.95 210.23 126.64 207.93 109.36 260.94 100.04 263.8 121.96 265.01 131.21" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M219.97,173c-1.27-4.97,1.06-7.38,1.06-7.38h0l9.02-5.68,5.25-12.91,3.2.08.87.12s-2.66,11.04-3.68,14.75c-1.02,3.72-10.44,17.24-10.44,17.24,0,0-.04-.01-.1-.04-.22-.09-.82-.36-1.56-.88" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g><g id="protester-2"><polygon points="175.21 136.06 175.21 157.13 132.78 156.74 129.29 156.74 129.29 136.06 175.21 136.06" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M149.58,219.48s1.75.44,3.64,2.33,5.83,2.55,7.5,1.6-2.55-11.14-2.77-11.5-2.84-4.15-2.84-4.15c0,0-1.6-.22-1.82,0s-1.82,4.73-1.82,4.73l-1.89,6.99Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M170.9,160.13h.04s-3.21,9.43-5.24,13.7c-1.46,3.06-4.18,7.38-5.59,9.57.07,1.19.11,2.37.08,3.32-.01.21-.01.41-.03.61-.19,3.1-1.16,10.57-1.16,10.57h-11.27s-1.74-9.41-1.84-11.74c-.01-.28,0-.63.02-1.02-.36-.55-3.78-5.78-7.87-13.16-3.31-5.96-4.06-9.84-4.24-11.34-1.37-1.27-1.02-3.9-1.02-3.9l2.87-.05s.63-1.65.92-1.99c.29-.34.39.88.24,2.04-.09.73-.54,1.78-.86,2.47.73,1.52,2.39,4.84,4.64,8.45,2.21,3.53,5.21,7.65,6.74,9.72l2.23.08.49.02-.15-.82c-.53-.09-1.05-.29-1.57-.63-1.89-1.21-1.77-4.57-1.77-4.57,0,0,.98-.06.98-1.46s1.28-2.86,1.28-2.86c2.74-1.71,6.88.85,6.95,2.19.05,1.24-.1,4.24-1.47,5.75l-.09,2.5c.17,0,.39-.03.65-.06.68-.07,1.6-.14,2.4-.2.26-.02.51-.03.73-.04,1.49-2.16,4.16-6.11,5.96-9.37l4.17-8.43c-.19-.65-.5-1.7-.53-1.86-.05-.25-.39-1.9-.05-2.29.34-.38.83,1.02.83,1.8h3.78s-.46,1.74-1.25,3Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M148.42,167.8s1.6-.33,2.87.27c0,0-.94,2.57.13,3.34,0,0-.43,1.37.07,1.67.5.3.3-2.14,1.24-2.47s1.04,1.2.77,2.27c-.27,1.07-1.27,1.2-1.27,1.47s1.37,1.94,2.07,1.97c.7.03,3.38-1.57,3.44-4.01s-1.1-4.51-1.1-4.51c0,0-.5-1.47-2.54-2.11s-4.01-.27-4.91.27-.84,1.5-.77,1.84Z"></path><path d="M154.9,166.33s-.23-2.11,1.84-2.44c2.07-.33,3.04,1.07,3.17,1.77.13.7-.84.2-.84.2,0,0,2.64,2.01,1.47,3.11-1.17,1.1-5.25-2.07-5.65-2.64Z"></path><path d="M160.19,186.72c-.01.21-.02.41-.03.61-.2,3.1-1.17,10.58-1.17,10.58h-11.27s-1.75-9.41-1.84-11.74c-.06-1.43.41-4.4.78-6.5l.62-2.29,2.27.08-.08.2s-1.75,2.97-.82,4.47c.92,1.5,4.42.87,5.63-.48,1.03-1.15.7-3.46.58-4.13.68-.06,1.6-.14,2.4-.19-.14,1.15-.51,5.41,1.25,7.57.73.9,1.28,1.47,1.68,1.82Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M154.09,209.65c1.89.15,10.34,30.15,10.63,30.58s3.93.15,4.95-.29-5.24-31.46-7.28-36.12-3.5-6.12-3.5-6.12l-11.07.44s-2.18,10.63-3.06,18.06-.58,23.59-.58,23.59c0,0,2.4,1.02,5.75.15,0,0,2.07-30.45,4.15-30.29Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M149.73,240.6l-1.09,6.26s.07,2.55,0,3.42-5.32.58-5.53.73-2.62.36-3.86-.07-1.09-1.02-.15-2.04,3.93-1.67,4.37-2.62.73-6.48.73-6.48l5.75.15-.22.66Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M164.43,239.14s1.97,7.28,1.97,8.08-1.53,3.06-1.97,4,.66,1.46,2.04,1.6,2.4,0,3.42-1.17,1.24-3.5,1.6-4.22-1.75-8.52-1.75-8.52l-5.32.22Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M158.9,197.71s-2.33-1.67-6.55.22c0,0-3.13-1.24-4.81-.95,0,0-1.09,2.84-.44,3.79s2.77-1.31,4.95-1.46,8.3,1.67,8.96,1.6-.87-2.91-2.11-3.2Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M156.79,199.68s5.9,12.52,7.28,16.46,2.62,3.5,4.15,1.53-.29-4.44.22-5.75-4.51-9.68-7.43-10.99-4.22-1.24-4.22-1.24Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M147.98,200.33s-2.62,11.07-2.62,13.83,0,6.26-2.04,6.77-.8-5.02-1.24-6.77-.07-4.88.87-7.14,3.79-6.77,3.79-6.77l1.24.07Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g><g id="protester-1"><path d="M245.24,175.94c-2.93-.11-5.74,11.07-5.74,11.07,0,0,2.31,1.45,3.8,1.43l2.63-3.38s1.67-9.02-.69-9.11Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M251.06,166.76c-.06-1.34-4.2-3.9-6.95-2.19,0,0-1.28,1.46-1.28,2.86s-.97,1.46-.97,1.46c0,0-.12,3.35,1.77,4.57.52.33,1.6.56,2.12.66l.87,3.25c2.01-.24,2.85-1.35,2.85-1.35l.12-3.51c1.37-1.51,1.52-4.51,1.47-5.75Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M244,164.74s3.1,1.08,2.96,2.71c-.12,1.38.97,2.1,1.04,2.25s.47-1.46,1.13-1.46.98,1.38.69,2.33-1.17.98-1.17.98c0,0,.18,1.49.62,2.08s.2,2.4.2,2.4c0,0,3.99.41,4.54.37s-.91-9.1-1.6-10.38-4.73-2.26-5.86-2.33-2.55.4-2.55,1.06Z"></path><path d="M252.69,167.08s0-2.86-.58-3.59-2.18-1.17-2.18-1.17c-1.17-.83-3.64-1.94-4.47-1.46-.69.4-1.44,2.55-1.67,3.26-1.55-.11-3.51-.06-3.72,0-.29.07-.62.4.25.76,0,0,7.83,2.26,9.47,2.04.09-.01.16-.03.22-.06,1.21.16,2.68.21,2.68.21Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M247.25,176.65c.83-.24,2.18-1.46,2.23-2.57l.73.34s5.34,1.65,5.78,1.94.63,8.74.49,10.92c0,0,.68,7.14.53,8.2-.15,1.07-2.57,1.8-5.97,2.14s-5.44-.63-6.41-1.55c-.97-.92-.78-8.2-1.21-10.05-.44-1.84-1.21-3.64-.34-6.31s1.55-3.35,1.75-3.59c.19-.24,1.26-.83,1.26-.83,0,0,.34,1.6,1.17,1.36Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M255.99,176.35l8.11,10.27s-3.93,1.67-4.44,1.75c-.32.05-2.54-2.24-4.14-3.94-1.51-1.6-2.11-3.92-1.39-6,.32-.93.89-1.74,1.87-2.08Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M251.72,211.26c1.89.15,10.34,30.15,10.63,30.58s3.93.15,4.95-.29-5.24-31.46-7.28-36.12-3.5-6.12-3.5-6.12l-11.07.44s-2.18,10.63-3.06,18.06-.58,23.59-.58,23.59c0,0,2.4,1.02,5.75.15,0,0,2.07-30.45,4.15-30.29Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M247.35,242.2l-1.09,6.26s.07,2.55,0,3.42-5.32.58-5.53.73-2.62.36-3.86-.07-1.09-1.02-.15-2.04,3.93-1.67,4.37-2.62.73-6.48.73-6.48l5.75.15-.22.66Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M262.06,240.75s1.97,7.28,1.97,8.08-1.53,3.06-1.97,4,.66,1.46,2.04,1.6,2.4,0,3.42-1.17,1.24-3.5,1.6-4.22-1.75-8.52-1.75-8.52l-5.32.22Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><polygon points="277.98 217.69 216.62 216.21 216.3 205.66 215.94 193.29 277.09 192.52 277.63 207.87 277.98 217.69" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></polygon><path d="M260.31,191.79c-2.69,1.09-6.23,2.18-7.04,2.42h0c-.04.12-.25.54-.97.86-.84.36-2.08.14-2.08.14-.29,1.02-.69,1.53-.98,1.39-.29-.15.33-1.75.33-1.75l-.26.07s-.07.22-.4.98c-.32.77-.51.66-.73.51-.21-.14.44-1.96.44-1.96h-.33s-.18.73-.51,1.31c-.32.58-.65.58-.76.18-.11-.4.55-2.15.55-2.15h-.26c-.25,0-.91,1.68-1.16,1.68s-.37-.33-.15-.95c.22-.62,1.06-2,1.49-1.97.44.04,3.68-.18,3.68-.18l7.75-4.58s3.06-2.12,5.17-1.17c2.12.95-.72,3.93-3.78,5.17Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M243.85,187.57l-.81,1.81s-.75,2.1-1.07,2.68c-.32.59-6.08,1.51-6.08,1.51l-3.95-.41h-.01c-.35.17-.73.07-1.14.13-.46.07-.77.7-1.04.44-.27-.27.27-.93.27-.93,0,0-.51.22-.51.71s-.22,1.41-.56,1.26c-.34-.15-.15-1.6-.15-1.6l-.21-.05c-.03.1.02,2.06-.37,1.92-.39-.15-.31-1.85-.31-1.85l-.15.05s.07,1.97-.32,1.82c-.38-.14-.31-1.79-.31-1.79,0,0-.22-.13-.17.38.05.51.22,1.12-.17,1.05-.39-.08-.27-.32-.36-.93-.1-.6.19-1.21.29-1.28.09-.07.24-.12.46-.24.22-.13.34-.15.7-.32.37-.17,1.41-.56,1.87-.56.43,0,2.51.62,2.76.7l6.81-2.72.82-2.78,3.71,1Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path></g></g>`;
  bind_props($$props, { state });
}
function SVGJournalist($$payload, $$props) {
  let state = $$props["state"];
  $$payload.out += `<path id="photographer-outline"${attr("fill", state == 3 ? "red" : "#062b3d")} d="M272.89,254.54c-.67,0-1.15-.02-1.49-.05-.46-.05-.82-.4-.88-.86-.06-.45.19-.89.61-1.06.4-.16.8-.35,1.22-.56.08-.05.17-.1.27-.13.68-.34,1.38-.72,2.08-1.11l.06-.03c.74-.41,1.48-.81,2.19-1.16.05-.25.18-.47.36-.63,0-.02,0-.03,0-.05-.08-.12-.14-.25-.17-.39h-.02c-.4-.29-.54-.38-5.29-14.94-.46-1.42-.94-2.89-1.05-4.47-.09-1.32.09-2.6.26-3.83.57-4.14,1.11-7.61,1.62-10.97.48-3.13.98-6.37,1.51-10.14-.03-.19-.05-.38-.07-.55-.07-.21-.04-.44.03-.66.46-1.35.81-2.75,1.03-4.17-.47-.05-.93-.22-1.34-.49-.66-.44-1.19-1.11-1.62-2.05-.44-.99-.69-2.05-.72-3.18-.44-2.03-.43-4.1-.42-6.1,0-1.48.01-3-.17-4.45-.07-.54-.16-.72-.23-.77-.11-.09-.47-.11-.68-.13l-3.6-.27c-.53-.04-1.58-.12-2.28-.82-.42.03-.84.04-1.23.05-.14.06-.28.09-.43.09-.11,0-.21-.02-.28-.04-.02,0-.04,0-.06,0-.12,0-.25-.03-.37-.07-.54-.03-.84-.1-1.1-.34-.45-.41-.5-.95-.53-1.21-.05-.5-.12-.92-.19-1.33-.14-.83-.26-1.62-.22-2.7,0-.16.02-.54.28-.88.33-.43.81-.51,1-.54l.1-.02s.09-.07.15-.09c.23-.12.49-.18.75-.18.13,0,.26.02.39.05.02,0,.03,0,.05.01l1.97-.32c.22-.03.44-.07.66-.07.23,0,.44.03.64.09.32.1.56.27.75.4.08.06.17.12.21.14.02,0,.04,0,.06,0,.25,0,.49-.08.73-.15.21-.07.43-.13.64-.18.43-.09.85-.11,1.17-.11h.88c-.06-.09-.11-.2-.15-.32-.14-.51-.13-1.08.02-1.64.2-.72.6-1.31.96-1.8.27-.37.77-1.06,1.61-1.31.07-.02.21-.05.22-.05.03-.03.06-.06.09-.09.31-.26.72-.41,1.14-.41.27,0,.54.06.78.18.07-.02.14-.03.21-.05-.12-.55-.1-1.11.05-1.64.32-1.1,1.23-2,2.36-2.4.29-1.19,1.15-2.2,2.29-2.59.32-.11.66-.16,1.01-.16.76,0,1.46.24,1.99.65.63-.46,1.51-.72,2.55-.72.36,0,.72.03,1.06.1.63.12,1.53.36,2.17,1.06.04.05.08.1.12.15.01,0,.02,0,.03,0,.11-.01.22-.02.33-.02.63,0,1.28.21,1.94.64,0,0,0,0,.01,0,.18-.05.36-.08.54-.08.25,0,.49.05.71.15.31-.16.65-.24,1-.24.26,0,.51.05.75.14.85.33,1.43,1.11,1.48,2,.01.27-.11.6-.3.8-.2.21-.49.34-.79.34-.09,0-.19-.01-.27-.03.3.29.53.64.67,1.02.07.2.12.41.13.62.39.27.71.65.88,1.09.23.59.25,1.24.05,1.9.01.09.02.19.02.29.22.3.35.67.37,1.06.02.39-.07.78-.26,1.16.02.09.03.18.04.27.18.27.27.59.26.92-.01.44-.19.87-.53,1.28-.26.31-.56.53-.85.72-.12.08-.24.15-.36.22.03.43-.02.83-.15,1.21-.32.94-1.15,1.7-2.23,2.07.2.14.4.3.58.47,1.19,1.1,1.92,2.73,2.08,4.57.12,1.41-.09,2.91-.65,4.71-.39,1.25-.85,2.34-1.4,3.32-.54.96-1.19,1.84-1.82,2.69-.9,1.22-1.74,2.37-2.25,3.67-.43,1.12-.59,2.34-.47,3.53.02.21.05.5-.03.82.14.91.9,1.66,1.78,2.52.73.71,1.55,1.52,2.11,2.55,1.62,2.95,1.6,6.88-.05,10.5-.46,1-.56,5.62.14,8.78.09.39.17.77.32,1.05,0,0,.06.08.13.17,3.1,4.17,4.84,9.51,5.17,15.88.02.29-.09.56-.28.75.21,1.29.4,2.77.58,4.41v.09c.11.91.19,1.75.25,2.46.02.28-.07.56-.26.77-.74.81-11.63.99-11.74.99h0c-.67,0-1.15-.02-1.49-.05-.33-.04-.61-.23-.76-.5-2.45.6-11.04.74-11.13.74ZM284.65,250.32c.07.69.14,1.34.19,1.92.29-.13.59-.27.89-.42.08-.06.17-.1.27-.13.68-.34,1.38-.72,2.07-1.11l.06-.03c.74-.41,1.48-.81,2.19-1.16.05-.25.18-.47.36-.63,0-.02,0-.03,0-.05-.1-.15-.17-.33-.19-.52-.03-.33.09-.65.31-.87-.03-.15-.06-.3-.09-.45-.19-.08-.36-.23-.47-.42-4.63-7.93-5.69-10.86-7.79-16.69-.39-1.08-.82-2.26-1.31-3.59-.2.39-.42.8-.64,1.23-.2.38-.38.72-.39,1,0,.2.08.47.17.75,1.66,5.22,3.49,12.37,4.56,17.8.07.37-.07.75-.36.98-.03.03-.07.05-.1.07.1.76.19,1.51.26,2.22v.09ZM275.54,180.41c.04.2.07.39.1.57.34,2.13.84,4.22,1.39,6.33.96-.96,2.29-2.36,3.09-3.46l.32-.45c.39-.54.79-1.09,1.24-1.61.23-.27.48-.53.73-.77-.71.37-1.43.66-1.96.66s-.95-.23-1.18-.65c-.6-1.05-.79-2.52-.84-3.32-.01.01-.03.03-.04.04,0,.09.01.23.02.33.05.51.14,1.46-.73,2.04-.15.1-.33.18-.53.24-.29.08-.59.12-.89.12-.24,0-.48-.03-.71-.07ZM293.08,165.15c.1.04.2.09.29.14-.09-.15-.15-.32-.16-.51h0c-.03.13-.08.25-.14.37Z"></path><g id="photographer"><path d="M277.93,245.17c.41,1.52.71,3.07.9,4.63-2.32.94-5,2.75-7.32,3.69,2.14.23,12.4-.44,12.38-.63-.25-2.82-.76-7.77-1.59-10.47l-4.37,2.78Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M272.94,253.01c1.4,0,2.8-.02,4.2-.06,1.39-.04,2.78-.1,4.17-.17.79-.04,1.57-.09,2.36-.15.12,0,.12-.2,0-.19-1.4.1-2.79.18-4.19.24-1.39.06-2.78.1-4.17.12-.79.01-1.58.02-2.36.02-.12,0-.12.19,0,.19h0Z" style="fill: #272425;"></path><path d="M283.55,250.29c-.77.21-1.44.74-1.84,1.44-.11.2-.2.41-.26.62-.03.12.15.17.18.05.27-.93,1.04-1.68,1.97-1.93.12-.03.07-.21-.05-.18h0Z" style="fill: #272425;"></path><path d="M275.22,251.79c.44.09.75.53.7.98,0,.05.05.09.09.09.06,0,.09-.04.09-.09.06-.52-.32-1.05-.84-1.16-.12-.03-.17.16-.05.18h0Z" style="fill: #272425;"></path><path d="M278.02,249.88c.8.05,1.58.33,2.23.8.1.07.19-.09.09-.16-.68-.49-1.49-.77-2.32-.82-.12,0-.12.18,0,.19h0Z" style="fill: #272425;"></path><path d="M278.4,249.04c.83.11,1.64.39,2.35.83.1.06.2-.1.09-.16-.75-.46-1.58-.75-2.45-.86-.12-.02-.12.17,0,.19h0Z" style="fill: #272425;"></path><path d="M278.24,248.38c.81-.15,1.68.07,2.32.6.09.08.23-.06.13-.13-.69-.57-1.62-.82-2.5-.65-.12.02-.07.2.05.18h0Z" style="fill: #fff;"></path><circle cx="281.55" cy="247.15" r=".72" style="fill: #fff;"></circle><path d="M291.31,244.98c.41,1.52.71,3.07.9,4.63-2.32.94-5,2.75-7.32,3.69,2.14.23,12.4-.44,12.38-.63-.25-2.82-.76-7.77-1.59-10.47l-4.37,2.78Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M273.38,169.2c1.04-.44,2.16-.65,3.28-.86,3.42-.64,6.83-1.28,10.25-1.91.43,1.22.65,2.51.67,3.8-4.67.5-9.46-.02-14.01,1.14-.11-.38-.15-.78-.12-1.17l-.06-.99Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M280.28,172.3c-.75.28-1.62.5-2.36.19-.74-.31-1.05-1.4-.36-1.8-.46-.13-.79-.56-.76-1s.42-.83.89-.9c.11.13-.04.33-.21.35-.17.02-.34-.07-.48-.17-.85-.62-1.24-1.72-.96-2.68s1.23-1.73,2.3-1.88c.02-1.03.66-2.09,1.71-2.45,1.05-.36,2.44.2,2.66,1.21.31-1.23,2.09-1.57,3.44-1.31.6.12,1.22.32,1.61.75.39.43.45,1.15,0,1.53-.07-.52.46-.99,1.02-1.06.57-.07,1.13.16,1.6.47.83.54,1.52,1.43,1.35,2.35.88-.07,1.77.48,2.04,1.24.27.77-.1,1.68-.86,2.1.79-.08,1.6.41,1.83,1.1.23.69-.16,1.51-.87,1.84.91,0,1.36,1.15.96,1.89-.4.74-1.28,1.15-2.1,1.5.24-.11.55.09.59.34.05.24-.08.49-.24.69-.68.84-1.86,1.19-2.96,1.45-.43.1-.88.2-1.31.11-.43-.08-.84-.4-.86-.8-.02-.4.52-.77.89-.55-.41.88-1.47,1.43-2.52,1.42s-2.04-.54-2.68-1.3c-.19-.23-.36-.51-.3-.8.07-.28.49-.49.72-.28.22.2.05.56-.19.74-.52.37-1.4.32-1.73-.2-.33-.52.26-1.33.89-1.14-.49.33-1.23.3-1.69-.06s-.62-1.01-.35-1.51l-.69-1.37Z"></path><path d="M275.28,203.5c-1.14,8.26-2.1,13.65-3.25,21.91-.17,1.2-.33,2.41-.25,3.62.1,1.45.55,2.85,1.01,4.23,1.49,4.55,4.66,14.24,4.91,14.41.21.15,5.11.3,6.16-.53-1.05-5.32-2.88-12.52-4.53-17.69-.11-.35-.23-.71-.22-1.08.01-.51.27-.98.5-1.44,2.84-5.38,3.49-7,4.61-12.98.16-.87.31-1.77.19-2.65-.15-1.07-.68-2.05-1.31-2.92-1.24-1.74-2.9-3.17-4.79-4.16l-3.05-.73Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M275.08,203.28c.39,4.83,4.87,16.9,5.87,19.52,4.27,11.18,4.14,12.82,10.17,23.16,0,0,4.11-.81,5.61-1.03-.55-10.42-4.94-15.17-5.19-15.64-.21-.4-.31-.86-.41-1.3-.69-3.12-.69-8.06-.07-9.41,1.38-3.02,1.68-6.69.08-9.61-1.3-2.38-4.31-3.52-4.02-6.22l-12.04.53Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M279.19,170.3c-.02,1.82.23,5.46.23,5.46l-.03,1.39s.03,2.16.74,3.4c.4.7,3.55-1.41,4.17-1.93l.75,3.19s1.44,1.91,5.1-.91c-.03,0-1.56-3.99-1.84-5.63.31.59,1.29.53,1.69,0,.4-.54.33-1.31.05-1.92-.25-.53-.67-1.01-1.23-1.18-.56-.18-1.25.02-1.52.54-.59-1.62-1.07-3.28-1.43-4.96l-6.67,2.56Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M273.29,171.61c.56-.81,1.51-1.26,2.49-1.25.22,0,.43.02.65.06.12.02.25.05.34.14.1.11.12.27.13.42.09,1.11.15,2.23.19,3.35.17-.07.38.04.47.2.1.16.11.35.13.54.04.5.07.99.11,1.49,0,.12.02.25-.04.36-.05.09-.14.16-.21.24-.49.58.25,1.67-.44,2.13-.08.05-.16.08-.25.11-.86.24-1.83-.05-2.43-.7-.16-.18-.31-.39-.54-.46-.18-.06-.83-.09-1-.15,0,0-.02-.52-.05-.9-.1-1.03-.16-2.07-.2-3.1.37,0,.73-.08,1.07-.23.06-.03.12-.08.14-.15.07-.18-.11-.32-.25-.44-.36-.29-.55-.77-.49-1.23.01-.11.09-.26.2-.41Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M275.81,172.85c-.37-.03-.71.35-.65.72.06.37.51.61.85.46s.47-.65.24-.94c-.14-.18-.41-.27-.6-.14l.16-.1Z"></path><path d="M276.62,176.72c-.28.08-.56.13-.84.14.03.03.06.06.09.09-.03-.36-.06-.73-.09-1.09,0-.04-.03-.14.01-.18.02-.02.07-.01.1-.02.05,0,.09,0,.14,0,.18,0,.37-.02.55-.03-.03-.03-.06-.06-.09-.09.02.37.04.73.06,1.1,0,.05,0,.11,0,.16,0,.12.19.12.19,0-.02-.37-.04-.73-.06-1.1v-.16s-.05-.1-.1-.09c-.21.01-.42.02-.63.03-.08,0-.18,0-.25.05-.07.05-.1.12-.1.2,0,.09,0,.18.02.27,0,.11.02.21.03.32.02.21.04.42.05.63,0,.05.04.1.09.09.3-.02.6-.07.89-.15.12-.03.07-.21-.05-.18Z"></path><path d="M274.09,178.01c.96-.05,1.92-.1,2.88-.15.12,0,.12-.19,0-.19-.96.05-1.92.1-2.88.15-.12,0-.12.19,0,.19h0Z"></path><path d="M274.31,173.9c.08-.03.18-.05.26-.06.05,0,.09,0,.14,0,.02,0,.05,0,.07,0,.01,0,.02,0,.03,0,0,0,.01,0,.02,0,.01,0,.01,0,0,0,.05,0,.1-.01.12-.07.01-.04-.01-.11-.07-.12-.21-.03-.42-.01-.63.06-.05.02-.08.06-.07.12.01.05.07.08.12.07h0Z"></path><path d="M272.64,174.2c-1-.02-2.02-.04-3.02-.05-.45,0-.9-.02-1.33.08-.68.15-1.39.54-2.03.27-.31-.13-.55-.4-.88-.51-.27-.08-.56-.04-.84,0-1.13.18-2.26.37-3.4.55-.13.02-.28.05-.36.16-.07.09-.07.2-.08.31-.06,1.51.25,2.39.41,3.89.02.21.06.44.21.58.2.18,3.79.11,5.4-.3l6.14-1.22-.24-3.76Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M261.65,174.48c0,1.67.13,3.35.36,5,0,.04.01.09.04.12.03.04.08.04.13.03.17-.04.35.15.33-.04-.21-1.63-.39-3.65-.38-5.3-.14-.04-.29-.02-.43.05l-.05.14Z" style="fill: #606060;"></path><path d="M262.68,175.1c.69-.14,1.38-.22,2.08-.25.12,0,.12-.19,0-.19-.72.03-1.43.11-2.13.26-.12.02-.07.2.05.18h0Z" style="fill: #606060;"></path><path d="M262.81,175.81l1.73-.24c.12-.02.07-.2-.05-.18l-1.73.24c-.12.02-.07.2.05.18h0Z" style="fill: #606060;"></path><path d="M262.8,176.55c.43-.15.87-.23,1.33-.22.12,0,.12-.19,0-.19-.47,0-.94.08-1.38.23-.11.04-.06.22.05.18h0Z"></path><path d="M262.87,177.98c.63-.1,1.25-.24,1.88-.34.12-.02.07-.2-.05-.18-.63.1-1.25.24-1.88.34-.12.02-.07.2.05.18h0Z" style="fill: #606060;"></path><path d="M266.11,174.7c.04.72.15,1.44.34,2.14.03.12.21.07.18-.05-.18-.68-.29-1.38-.33-2.09,0-.12-.19-.12-.19,0h0Z" style="fill: #606060;"></path><path d="M269.77,174.92c.13.8.24,1.6.34,2.4.01.12.2.12.19,0-.1-.82-.21-1.63-.34-2.45-.02-.12-.2-.07-.18.05h0Z" style="fill: #606060;"></path><path d="M270.28,175.37c.14.52.24,1.04.31,1.57,0,.05.04.09.09.09.05,0,.1-.04.09-.09-.07-.55-.18-1.09-.32-1.62-.03-.12-.21-.07-.18.05h0Z" style="fill: #606060;"></path><path d="M279.53,169.79c-.59.15-.74,1.03-.34,1.49.4.46,1.12.51,1.69.3.57-.22,1.02-.66,1.46-1.08-.28.61.28,1.35.93,1.47.66.12,1.32-.2,1.85-.61-.12.44.09.94.48,1.16s.94.14,1.24-.19c-.08.24.03.52.25.64.41-.03.8-.23,1.06-.54.75.05,1.5-.44,1.76-1.15.26-.71,0-1.57-.61-2.01.41-.24.45-.81.4-1.29-.06-.65-.2-1.34-.67-1.81s-1.34-.56-1.73-.03c-.16-.75-.74-1.4-1.48-1.62-.73-.23-1.58-.02-2.13.51-.67-.47-1.65-.43-2.28.09s-.84,1.49-.5,2.23c-.73.02-1.38.69-1.39,1.42-.61,0-1.02.83-.65,1.31l.66-.3Z"></path><path d="M276.7,190c-.78-2.91-1.56-5.83-2.04-8.81-.14-.9-.29-1.86-.91-2.52-.76-.81-1.99-.93-3.09-.9-1.11.03-2.28.14-3.26-.36-.58-.3-1.09-.8-1.75-.81-.11,0-.22.02-.3.09-.34.25-.1.73.16,1.01.59.64,1.19,1.06,1.94,1.49,0,0,0,0,0,0-.95.03-1.81.27-2.74.46.38.54,1.12.63,1.78.68,1.2.09,2.4.18,3.6.27.43.03.88.07,1.22.34.42.33.54.91.6,1.44.46,3.72-.27,7.57.73,11.18.02.08.05.16.11.2.09.08.23.05.35,0,1.34-.44,2.32-1.57,3.24-2.64.27-.32.54-.79.27-1.11l.12-.02Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M276.58,189.15c-.88,1.33-2.51,3.1-4.1,3.31-.05,1.15.18,2.32.65,3.37.28.63.67,1.24,1.25,1.62.58.38,1.38.48,1.96.11-.21,1.94-.63,3.86-1.26,5.71,1.63.36,3.13,1.2,4.76,1.58,2.36.56,4.95.09,6.97-1.27.12-.08.24-.17.31-.29.1-.18.07-.39.05-.59-.14-1.35.05-2.73.53-3.99.93-2.4,2.86-4.26,4.13-6.5.56-.99.98-2.04,1.31-3.12.43-1.4.73-2.87.6-4.33s-.69-2.92-1.76-3.92c-1.32-1.23-3.29-1.62-5.05-1.24s-3.31,1.47-4.49,2.84c-.55.63-1.02,1.32-1.51,2-1.42,1.94-4.35,4.71-4.35,4.71Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M277.59,169.31c.47.8.52,1.82.14,2.66-.1.22-.24.44-.47.54-.11.05-.24.06-.35.02-.24-.08-.29-.32-.31-.53-.05-.57.08-1.21-.27-1.67-.39-.51-1.21-.5-1.74-.14s-.82.98-1.05,1.58c-.24.64-.45,1.31-.92,1.82-.05.05-.12.09-.19.1-.24.02-.3-.25-.29-.46.02-.28.1-.56.24-.81-.08.37-.28.7-.57.94-.11.09-.29.02-.3-.12-.06-.56.05-1.15.32-1.65-.04.36-.15.71-.32,1.03-.13.24-.49.2-.56-.06-.1-.35-.08-.75.02-1.1.15-.55.48-1.03.81-1.49.29-.39.61-.8,1.08-.93.16-.05.33-.06.47-.15.08-.05.14-.13.21-.19.24-.2.6-.23.87-.08.14.08.26.2.41.22.11.01.22-.03.32-.06.68-.22,1.45-.15,2.07.2l.37.34Z" style="fill: #fff; stroke: #272425; stroke-linecap: round; stroke-linejoin: round; stroke-width: .5px;"></path><path d="M262.92,176.52c.58-.05,1.17-.1,1.75-.16.12-.01.12-.2,0-.19-.58.05-1.17.1-1.75.16-.12.01-.12.2,0,.19h0Z" style="fill: #606060;"></path><path d="M262.91,177.19c.46-.13.93-.19,1.41-.17.12,0,.12-.18,0-.19-.49-.02-.99.04-1.46.17-.12.03-.07.21.05.18h0Z" style="fill: #606060;"></path><path d="M262.98,178.83c.63-.14,1.28-.18,1.92-.12.12.01.12-.18,0-.19-.66-.06-1.32-.02-1.97.12-.12.03-.07.21.05.18h0Z" style="fill: #606060;"></path><path d="M263.61,179.35c.24-.07.5-.09.75-.03.05.01.1-.01.12-.07.01-.05-.02-.1-.07-.12-.28-.06-.57-.05-.85.03-.12.03-.07.22.05.18h0Z" style="fill: #606060;"></path><path d="M266.98,175.07c.1.56.17,1.13.21,1.7,0,.12.2.12.19,0-.04-.59-.11-1.17-.22-1.75-.02-.12-.2-.07-.18.05h0Z" style="fill: #606060;"></path><path d="M267.54,175.07c.15.46.2.94.16,1.42-.01.12.18.12.19,0,.04-.49-.01-1-.17-1.47-.04-.11-.22-.07-.18.05h0Z" style="fill: #606060;"></path><path d="M268.19,175.11c-.01.34.02.68.09,1.02.03.12.21.07.18-.05-.07-.32-.1-.64-.08-.97,0-.12-.18-.12-.19,0h0Z" style="fill: #606060;"></path><path d="M277.01,174.5c.1.85.16,1.7.19,2.56,0,.12.19.12.19,0-.03-.85-.09-1.71-.19-2.56-.01-.12-.2-.12-.19,0h0Z"></path><path d="M274.05,174.19c.01.26-.09.52-.3.68-.2.16-.43.26-.48.53-.03.14-.01.29,0,.43,0,.16.02.33.02.49.01.27,0,.56.25.73.11.08.24.12.35.2.12.09.18.24.17.39,0,.12.18.12.19,0,.01-.27-.14-.49-.37-.61-.1-.06-.23-.1-.3-.19-.08-.11-.08-.26-.09-.39,0-.16-.02-.33-.02-.49,0-.15-.03-.3-.01-.45.02-.28.29-.36.48-.53.22-.2.33-.49.32-.78,0-.12-.19-.12-.19,0h0Z"></path><path d="M273.65,171.79c-.01.12-.02.24-.03.36-.01.11-.03.23,0,.34.03.2.22.39.43.29.09-.04.14-.13.18-.22.04-.1.07-.2.09-.31.04-.21.05-.46-.13-.6-.09-.07-.2-.1-.31-.06-.11.04-.19.14-.18.26,0,.12.19.12.19,0,0-.05.04-.08.08-.09.05,0,.1.03.13.06.09.12.06.3.03.43-.02.08-.04.16-.07.23-.02.04-.04.11-.09.13-.05.02-.09-.01-.12-.05-.04-.05-.05-.13-.05-.19,0-.2.03-.39.05-.59,0-.05-.05-.09-.09-.09-.05,0-.09.04-.09.09h0Z"></path><path d="M274.43,171.29c.37.35.37.94,0,1.29-.09.08.05.22.13.13.44-.42.44-1.14,0-1.56-.09-.08-.22.05-.13.13h0Z"></path><path d="M292.94,168.39c.47-.41,1.23-.13,1.55.34.45.66.16,1.57-.26,2.16-.24.33-.53.63-.88.84-.1.06-.27.15-.39.08-.14-.08.12-.32.18-.38.26-.25.62-.38.98-.36.37.02.74.22.83.61.09.4-.12.82-.38,1.11-.29.32-.68.55-1.1.64.04.05.07.09.11.14.22-.32.74-.12,1.01.01.19.09.4.21.43.44.02.2-.09.41-.21.57-.14.19-.33.33-.52.47-.2.14-.42.27-.64.39-.44.23-.91.39-1.4.48-.2.04-.52.08-.62-.15-.07-.16-.02-.36.13-.45.11-.06.01-.22-.09-.16-.18.1-.27.31-.25.52.02.23.18.41.42.45.27.05.57-.03.83-.1.28-.07.56-.17.83-.29.27-.12.52-.26.77-.42.23-.15.46-.32.64-.53.16-.19.3-.42.3-.68,0-.27-.16-.47-.39-.6-.39-.22-1.08-.49-1.4-.02-.05.07.03.15.11.14.43-.1.84-.32,1.14-.65.29-.31.51-.72.49-1.15,0-.2-.07-.4-.2-.55-.14-.18-.36-.29-.58-.34-.4-.1-.85,0-1.19.23-.17.12-.35.28-.42.47-.07.18.03.36.22.39.19.03.37-.05.52-.15.2-.13.38-.28.55-.45.61-.64,1.09-1.63.74-2.51-.26-.65-1.1-1.1-1.77-.78-.08.04-.15.09-.22.14-.09.08.04.21.13.13h0Z"></path><path d="M279.48,170.7c-.17-.1-.38.02-.43.2-.03.1-.03.2-.02.3,0,.13.02.26.03.4.02.24.04.48.04.72,0,.22-.02.46-.13.66-.08.16-.23.3-.4.36-.15.06-.34.06-.46-.06-.09-.09-.16-.25-.1-.37.07-.15.24-.12.35-.04.16.13.19.32.12.5-.09.21-.27.37-.45.5-.1.07.04.21.13.13.32-.25.72-.69.46-1.11-.09-.15-.27-.29-.46-.28-.19,0-.34.15-.36.33-.03.18.05.37.19.49.15.13.37.16.56.11.21-.06.38-.2.51-.37.15-.2.2-.46.22-.71.02-.31-.02-.61-.04-.92-.01-.15-.03-.31-.03-.47,0-.08.05-.3.18-.22.1.06.2-.1.09-.16h0Z"></path><path d="M288.74,175.46c-.15-.28-.57-.24-.84-.07-.34.22-.58.64-.51,1.04s.52.73.91.59c-.41.26-.53.87-.29,1.3s.75.66,1.23.63.94-.3,1.26-.67c0,.24.21.43.43.5s.47.02.7-.05c.76-.23,1.48-.74,1.74-1.49.31-.89-.1-1.86-.49-2.72-.65.64-1.5,1.08-2.4,1.23-.63.1-1.4,0-1.71-.57l-.03.27Z"></path><path d="M290.54,164.56c.1-.22.26-.43.46-.57.18-.12.42-.21.63-.14.32.09.6.57.33.84.05.02.11.04.16.07.01-.42.31-.8.69-.95.4-.16.84-.02,1.13.29.16.18.26.4.27.64,0,.12.19.12.19,0-.02-.5-.37-.94-.83-1.12-.47-.18-1.01,0-1.33.37-.18.21-.29.48-.3.76,0,.08.1.12.16.07.28-.28.17-.72-.09-.97-.32-.31-.79-.26-1.13,0-.21.16-.38.37-.49.61-.05.11.11.2.16.09h0Z"></path><path d="M276.27,198c-.13,0-.25-.09-.28-.22-.03-.13.02-.26.14-.32l.42-.24c1.13-.66,2.24-1.38,3.31-2.11,1.08-.75,2.15-1.53,3.16-2.34,1.02-.81,2.02-1.67,2.98-2.56.78-.72,1.67-1.59,2.38-2.58.73-1.03,1.17-2.06,1.28-3.07.02-.15.15-.27.3-.27.06,0,.18.05.22.09.05.06.08.14.07.22-.02.15-.04.3-.07.45-.2,1.06-.72,2.14-1.54,3.22-.76.99-1.67,1.86-2.53,2.64-.98.89-2.01,1.76-3.07,2.59-1.05.82-2.13,1.61-3.22,2.35-1.1.75-2.25,1.46-3.4,2.13-.03.02-.11.04-.15.04h0Z" style="fill: #272425;"></path><path d="M277.4,192.72c-.16,0-.29-.11-.3-.27-.11-.92-.35-1.82-.71-2.69-.03-.06-.01-.2.02-.26.05-.08.15-.13.25-.13.12,0,.23.07.28.19.37.9.62,1.86.74,2.84,0,.06-.03.18-.07.22-.05.06-.13.09-.22.09h0Z" style="fill: #272425;"></path><path d="M278.84,190.79c-.13,0-.24-.08-.28-.2-.23-.7-.55-1.36-.98-1.96-.04-.06-.06-.22-.02-.29.05-.1.16-.16.27-.16.07,0,.21.07.24.13.45.65.81,1.36,1.05,2.11.02.06,0,.2-.04.26-.06.08-.15.12-.24.12h0Z" style="fill: #272425;"></path><path d="M281.6,203.7c-.57,0-1.13-.09-1.68-.26-.72-.23-1.39-.57-2.04-.9-.59-.3-1.19-.61-1.82-.83-.14-.05-.22-.18-.2-.33.02-.14.14-.25.28-.25.77.25,1.4.57,2.02.89l.23.12c.58.3,1.21.61,1.86.79.43.12.88.18,1.34.18.25,0,.5-.02.74-.05,1.5-.21,2.9-.95,4.13-1.61.03-.02.11-.04.14-.04.13,0,.25.1.29.23.03.13-.03.26-.15.32-.74.39-1.54.8-2.36,1.13-.81.32-1.54.5-2.24.57-.18.02-.37.03-.55.03Z" style="fill: #272425;"></path><path d="M286.32,252.82c1.4,0,2.8-.02,4.2-.06,1.39-.04,2.78-.1,4.17-.17.79-.04,1.57-.09,2.36-.15.12,0,.12-.2,0-.19-1.4.1-2.79.18-4.19.24-1.39.06-2.78.1-4.17.12-.79.01-1.58.02-2.36.02-.12,0-.12.19,0,.19h0Z" style="fill: #fff;"></path><path d="M296.93,250.1c-.77.21-1.44.74-1.84,1.44-.11.2-.2.41-.26.62-.03.12.15.17.18.05.27-.93,1.04-1.68,1.97-1.93.12-.03.07-.21-.05-.18h0Z" style="fill: #272425;"></path><path d="M288.6,251.6c.44.09.75.53.7.98,0,.05.05.09.09.09.06,0,.09-.04.09-.09.06-.52-.32-1.05-.84-1.16-.12-.03-.17.16-.05.18h0Z" style="fill: #272425;"></path><path d="M291.4,249.69c.8.05,1.58.33,2.23.8.1.07.19-.09.09-.16-.68-.49-1.49-.77-2.32-.82-.12,0-.12.18,0,.19h0Z" style="fill: #272425;"></path><path d="M291.78,248.85c.83.11,1.64.39,2.35.83.1.06.2-.1.09-.16-.75-.46-1.58-.75-2.45-.86-.12-.02-.12.17,0,.19h0Z" style="fill: #272425;"></path><path d="M291.62,248.19c.81-.15,1.68.07,2.32.6.09.08.23-.06.13-.13-.69-.57-1.62-.82-2.5-.65-.12.02-.07.2.05.18h0Z" style="fill: #272425;"></path><path d="M295.65,246.96c0,.4-.32.72-.72.72s-.72-.32-.72-.72.32-.72.72-.72.72.32.72.72Z" style="fill: #fff;"></path></g>`;
  bind_props($$props, { state });
}
function Protes($$payload, $$props) {
  let showDirect = true;
  let play = false;
  function playAudio() {
    console.log("PLAY");
    play = true;
    setTimeout(
      () => {
        play = false;
      },
      100
    );
  }
  let index = $$props["index"], state = fallback($$props["state"], 0);
  if (state > 0) {
    playAudio();
    showDirect = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="svelte-2xtzb5"><svg viewBox="0 0 300 300" class="svelte-2xtzb5">`;
    SVGBackground($$payload2);
    $$payload2.out += `<!---->`;
    SVGPolice($$payload2, {
      get state() {
        return state;
      },
      set state($$value) {
        state = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
    SVGProtester($$payload2, {
      get state() {
        return state;
      },
      set state($$value) {
        state = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
    SVGJournalist($$payload2, {
      get state() {
        return state;
      },
      set state($$value) {
        state = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></svg> `;
    if (state > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="popover svelte-2xtzb5">${escape_html(state == 1 ? "Disperse the protesters" : state == 2 ? "Arrest the protesters" : state == 3 ? "Arrest the journalists" : "")} <div${add_styles({ "margin-top": "1rem" })}><button class="svelte-2xtzb5">Yes</button> <button class="svelte-2xtzb5">No</button></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (showDirect) {
      $$payload2.out += "<!--[-->";
      Direct($$payload2, {
        get showDirect() {
          return showDirect;
        },
        set showDirect($$value) {
          showDirect = $$value;
          $$settled = false;
        },
        play,
        content: "Click on the people in the image to choose an action"
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></section> `;
    ButtonAudio($$payload2, { play });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { index, state });
}
function Resume($$payload, $$props) {
  let index = $$props["index"], sector = $$props["sector"], area = $$props["area"], state = $$props["state"], jurus = $$props["jurus"];
  let s = "";
  let a = "";
  let p = "";
  let j = "";
  if (sector == "bendungan") {
    s = "Dam";
  } else if (sector == "jalantol") {
    s = "Toll Road";
  } else if (sector == "kereta") {
    s = "Railway";
  } else if (sector == "bandara") {
    s = "Airport/Port";
  } else if (sector == "energi") {
    s = "Energy Infrastructure";
  } else if (sector == "smelter") {
    s = "Smelter";
  } else if (sector == "kie") {
    s = "Industrial/Economic Zone";
  } else if (sector == "pangan") {
    s = "Food Estate";
  }
  if (jurus == "hijau") {
    j = "Give your project a “green” label";
  } else if (jurus == "nasionalisme") {
    j = "Push a nationalism and sovereignty narrative";
  } else if (jurus == "csr") {
    j = "CSR: hand out food packages, plant trees, etc.";
  } else if (jurus == "peneliti") {
    j = "Pay researchers to write studies you want";
  } else if (jurus == "influencer") {
    j = "Pay influencers to promote your project";
  } else if (jurus == "iklan") {
    j = "Buy big ads for positive media coverage";
  }
  if (area = 0) {
    a = "Forest Area/Indigenous Land";
  } else if (area = 1) {
    a = "Farmland/Plantation Area";
  } else if (area = 2) {
    a = "Coastal Area";
  } else if (area = 3) {
    a = "Settlement Area";
  }
  if (state == 1) {
    p = "Disperse the protesters";
  } else if (state == 2) {
    p = "Arrest the protesters";
  } else if (state == 3) {
    p = "Arrest the journalists";
  }
  $$payload.out += `<section class="svelte-rnc6lu"><h2 class="svelte-rnc6lu">Your Project Plan</h2> <div class="svelte-rnc6lu"><div class="resume svelte-rnc6lu"><p class="head svelte-rnc6lu">Project:</p> <p class="content svelte-rnc6lu">${escape_html(s)}</p></div> <div class="resume svelte-rnc6lu"><p class="head svelte-rnc6lu">Permits:</p> <p class="content svelte-rnc6lu">Complete</p></div> <div class="resume svelte-rnc6lu"><p class="head svelte-rnc6lu">Land Cleared:</p> <p class="content svelte-rnc6lu">${escape_html(a)}</p></div> <div class="resume svelte-rnc6lu"><p class="head svelte-rnc6lu">Crowd Control Method:</p> <p class="content svelte-rnc6lu">${escape_html(p)}</p></div> <div class="resume svelte-rnc6lu"><p class="head svelte-rnc6lu">Whitewashing Move:</p> <p class="content svelte-rnc6lu">${escape_html(j)}</p></div></div> <div class="button-container svelte-rnc6lu"><button class="svelte-rnc6lu">Finish</button> <a class="button svelte-rnc6lu" href="https://projectmultatuli.org/proyek-sengsara-nasional/" target="_blank">Read the PSN Series</a></div>  <div class="congratulations svelte-rnc6lu"><div class="left svelte-rnc6lu"><img src="./images/prabowo-subianto.png" alt="Prabowo Subianto - PSN for Dummies" class="svelte-rnc6lu"></div> <div class="center svelte-rnc6lu"><p class="svelte-rnc6lu">You’re all set to become a PSN investor!</p></div> <div class="right svelte-rnc6lu"><img src="./images/joko-widodo.png" alt="Joko Widodo - PSN for Dummies" class="svelte-rnc6lu"></div></div> <div class="dialog svelte-rnc6lu"></div></section>`;
  bind_props($$props, { index, sector, area, state, jurus });
}
function Infog($$payload, $$props) {
  push();
  let index = $$props["index"];
  let show = false;
  onDestroy(() => {
    show = false;
  });
  $$payload.out += `<section class="svelte-90qwk">`;
  if (index == 4) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0
    })} class="svelte-90qwk">Included in official development plans</p> <p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0,
      "transition-delay": "400ms"
    })} class="svelte-90qwk">Fits the regional spatial plan</p> <p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0,
      "transition-delay": "800ms"
    })} class="svelte-90qwk">Has significant economic and social impact</p> <p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0,
      "transition-delay": "1200ms"
    })} class="svelte-90qwk">Aligned with other infrastructure projects</p> <p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0,
      "transition-delay": "1600ms"
    })} class="svelte-90qwk">Supported by a feasibility study</p> <p${add_styles({
      transform: `translateX(${stringify(show ? 0 : -100)}px)`,
      opacity: show ? 1 : 0,
      "transition-delay": "2000ms"
    })} class="svelte-90qwk"><strong>Investment value above Rp500 billion</strong></p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { index });
  pop();
}
const beep = "/_app/immutable/assets/psn-audio-beep.BeEdw85D.mp3";
function Aspirasi($$payload, $$props) {
  let index = $$props["index"], time = fallback($$props["time"], 30);
  let play = false;
  let start = false;
  let people = [];
  for (let i = 0; i < 20; i++) {
    people.push({
      status: "idle",
      type: Math.floor(Math.random() * 2)
    });
  }
  let timerInterval;
  let askInterval;
  let solveTimer;
  let processTime = 4;
  let showButton = false;
  let imgW = 100;
  if (time == 0) {
    clearInterval(timerInterval);
    clearInterval(askInterval);
    setTimeout(
      () => {
        time = 30;
        clearTimeout(solveTimer);
        people.forEach((d) => d.status = "idle");
        index = 23;
        start = false;
      },
      500
    );
  }
  if (time <= 5) {
    showButton = true;
  }
  const each_array = ensure_array_like(people);
  $$payload.out += `<audio${attr("src", beep)}></audio> `;
  ButtonAudio($$payload, { play });
  $$payload.out += `<!----> <section class="svelte-4lasws"><h1${add_styles({ color: time > 3 ? "black" : "red" })} class="svelte-4lasws">00:${escape_html(time >= 10 ? time : "0" + time)}</h1> <svg class="svelte-4lasws"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let p = each_array[i];
    if (p.type == 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<g>`;
      if (p.status == "ask") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<image${attr("w", 70)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50 + 46.66)}${attr("width", imgW)} height="136.67"${attr("id", i)}${attr("status", p.status)} href="./images/petani-02.svg"${attr("data-id", i)}${attr("data-status", status)}></image>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (p.status == "process") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<image${attr("w", 100)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50)}${attr("width", imgW)} height="183.33" href="./images/petani-03.svg"></image>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (p.status == "idle" || p.status == "solved") {
            $$payload.out += "<!--[-->";
            $$payload.out += `<image${add_styles({ "pointer-event": "none" })}${attr("w", 100)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50 + 86.66)}${attr("width", imgW)} height="96.67" href="./images/petani-01.svg"></image>`;
          } else {
            $$payload.out += "<!--[!-->";
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]--></g>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (p.type == 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<g>`;
        if (p.status == "ask") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<image${attr("w", 100)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50 + 46.66)}${attr("width", imgW)} height="136.67"${attr("id", i)}${attr("status", p.status)} href="./images/petani-05.svg"${attr("data-id", i)}${attr("data-status", status)}></image>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (p.status == "process") {
            $$payload.out += "<!--[-->";
            $$payload.out += `<image${attr("w", 100)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50)}${attr("width", imgW)} height="183.33" href="./images/petani-06.svg"></image>`;
          } else {
            $$payload.out += "<!--[!-->";
            if (p.status == "idle" || p.status == "solved") {
              $$payload.out += "<!--[-->";
              $$payload.out += `<image${add_styles({ "pointer-event": "none" })}${attr("w", 100)}${attr("h", 200)}${attr("x", i % 5 * (0.7 * imgW) - 16)}${attr("y", Math.floor(i / 5) * 50 + 86.66)}${attr("width", imgW)} height="96.67" href="./images/petani-04.svg"></image>`;
            } else {
              $$payload.out += "<!--[!-->";
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></g>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--><circle fill="lightyellow" stroke="red"${attr("cx", i % 5 * 70 + 35)}${attr("cy", Math.floor(i / 5) * 50 - 12)} r="15" stroke-width="5"${attr("opacity", p.status == "process" ? 1 : 0)}${attr("stroke-dasharray", Math.PI * 30)}${attr("stroke-dashoffset", Math.PI * 30 * ((4 - processTime) / 4))} transform="rotate(-90)"${attr("transform-origin", `${stringify(i % 5 * 70 + 35)} ${stringify(Math.floor(i / 5) * 50 - 12)}`)}></circle><text${attr("x", `${stringify(i % 5 * 20 + 10)}%`)}${attr("y", Math.floor(i / 5) * 50 - 10)}${attr("opacity", p.status == "process" ? 1 : 0)} fill="black" text-anchor="middle" dominant-baseline="middle" pointer-events="none" font-family="Lexend Giga">${escape_html(Math.floor(processTime))}</text>`;
  }
  $$payload.out += `<!--]--></svg> <button${add_styles({ display: start ? "none" : "block" })}${attr("disabled", start, true)} class="svelte-4lasws">Start</button> `;
  if (showButton) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="svelte-4lasws">Too hard!<br>Let’s skip this!</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { index, time });
}
function GameOver($$payload, $$props) {
  let index = $$props["index"];
  $$payload.out += `<section class="svelte-y58ok4"><h2 class="svelte-y58ok4">GAME OVER</h2> `;
  if (index == 23) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="svelte-y58ok4">Retry</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { index });
}
function Game($$payload, $$props) {
  let index = $$props["index"];
  let sector = "a", jurus = "j", allowClick, match, area, time = 30, state = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="screen svelte-1ddm0bp">`;
    if (index == 3) {
      $$payload2.out += "<!--[-->";
      Sector($$payload2, {
        get index() {
          return index;
        },
        set index($$value) {
          index = $$value;
          $$settled = false;
        },
        get sector() {
          return sector;
        },
        set sector($$value) {
          sector = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
      if (index == 4) {
        $$payload2.out += "<!--[-->";
        Infog($$payload2, { index });
      } else {
        $$payload2.out += "<!--[!-->";
        if (index >= 5 && index <= 6) {
          $$payload2.out += "<!--[-->";
          Matching($$payload2, {
            get index() {
              return index;
            },
            set index($$value) {
              index = $$value;
              $$settled = false;
            },
            get match() {
              return match;
            },
            set match($$value) {
              match = $$value;
              $$settled = false;
            }
          });
        } else {
          $$payload2.out += "<!--[!-->";
          if (index == 7) {
            $$payload2.out += "<!--[-->";
            TataRuang($$payload2, {
              get index() {
                return index;
              },
              set index($$value) {
                index = $$value;
                $$settled = false;
              },
              get allowClick() {
                return allowClick;
              },
              set allowClick($$value) {
                allowClick = $$value;
                $$settled = false;
              },
              get area() {
                return area;
              },
              set area($$value) {
                area = $$value;
                $$settled = false;
              }
            });
          } else {
            $$payload2.out += "<!--[!-->";
            if (index == 8) {
              $$payload2.out += "<!--[-->";
              Choice($$payload2, {
                get index() {
                  return index;
                },
                set index($$value) {
                  index = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload2.out += "<!--[!-->";
              if (index >= 9 && index <= 10) {
                $$payload2.out += "<!--[-->";
                Aspirasi($$payload2, {
                  get index() {
                    return index;
                  },
                  set index($$value) {
                    index = $$value;
                    $$settled = false;
                  },
                  get time() {
                    return time;
                  },
                  set time($$value) {
                    time = $$value;
                    $$settled = false;
                  }
                });
              } else {
                $$payload2.out += "<!--[!-->";
                if (index == 11) {
                  $$payload2.out += "<!--[-->";
                  Protes($$payload2, {
                    get index() {
                      return index;
                    },
                    set index($$value) {
                      index = $$value;
                      $$settled = false;
                    },
                    get state() {
                      return state;
                    },
                    set state($$value) {
                      state = $$value;
                      $$settled = false;
                    }
                  });
                } else {
                  $$payload2.out += "<!--[!-->";
                  if (index == 12) {
                    $$payload2.out += "<!--[-->";
                    Intro($$payload2, {
                      get index() {
                        return index;
                      },
                      set index($$value) {
                        index = $$value;
                        $$settled = false;
                      }
                    });
                  } else {
                    $$payload2.out += "<!--[!-->";
                    if (index == 13) {
                      $$payload2.out += "<!--[-->";
                      Sector($$payload2, {
                        get index() {
                          return index;
                        },
                        set index($$value) {
                          index = $$value;
                          $$settled = false;
                        },
                        get jurus() {
                          return jurus;
                        },
                        set jurus($$value) {
                          jurus = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload2.out += "<!--[!-->";
                      if (index == 14) {
                        $$payload2.out += "<!--[-->";
                        Resume($$payload2, {
                          get index() {
                            return index;
                          },
                          set index($$value) {
                            index = $$value;
                            $$settled = false;
                          },
                          get sector() {
                            return sector;
                          },
                          set sector($$value) {
                            sector = $$value;
                            $$settled = false;
                          },
                          get area() {
                            return area;
                          },
                          set area($$value) {
                            area = $$value;
                            $$settled = false;
                          },
                          get state() {
                            return state;
                          },
                          set state($$value) {
                            state = $$value;
                            $$settled = false;
                          },
                          get jurus() {
                            return jurus;
                          },
                          set jurus($$value) {
                            jurus = $$value;
                            $$settled = false;
                          }
                        });
                      } else {
                        $$payload2.out += "<!--[!-->";
                        if (index == 23) {
                          $$payload2.out += "<!--[-->";
                          GameOver($$payload2, {
                            get index() {
                              return index;
                            },
                            set index($$value) {
                              index = $$value;
                              $$settled = false;
                            }
                          });
                        } else {
                          $$payload2.out += "<!--[!-->";
                        }
                        $$payload2.out += `<!--]-->`;
                      }
                      $$payload2.out += `<!--]-->`;
                    }
                    $$payload2.out += `<!--]-->`;
                  }
                  $$payload2.out += `<!--]-->`;
                }
                $$payload2.out += `<!--]-->`;
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div> `;
    if (index != 14) {
      $$payload2.out += "<!--[-->";
      Dialog($$payload2, {
        get index() {
          return index;
        },
        set index($$value) {
          index = $$value;
          $$settled = false;
        },
        get match() {
          return match;
        },
        set match($$value) {
          match = $$value;
          $$settled = false;
        },
        get area() {
          return area;
        },
        set area($$value) {
          area = $$value;
          $$settled = false;
        },
        get time() {
          return time;
        },
        set time($$value) {
          time = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { index });
}
function Start($$payload, $$props) {
  let index = $$props["index"];
  let width;
  $$payload.out += `<section class="svelte-eh19e8"><div class="title svelte-eh19e8"><div${add_styles({
    width: "0",
    "border-left": `#089f5e solid ${stringify(width)}px`
  })} class="trapezoid-2 svelte-eh19e8"></div> <div${add_styles({
    width: "0",
    "border-left": `black solid ${stringify(width)}px`
  })} class="trapezoid svelte-eh19e8"></div> <h1 class="title-text-1 svelte-eh19e8" id="t1">PSN</h1> <h1 class="title-text-2 svelte-eh19e8" id="t2">for</h1> <h1 class="title-text-2 svelte-eh19e8" id="t3">DUMMIES</h1></div> <div class="bottom svelte-eh19e8"><div class="left svelte-eh19e8"><img src="./images/prabowo-subianto.png" alt="Prabowo Subianto - PSN for Dummies" class="svelte-eh19e8"></div> <div class="center svelte-eh19e8"><button class="svelte-eh19e8">PLAY</button></div> <div class="right svelte-eh19e8"><img src="./images/joko-widodo.png" alt="Joko Widodo - PSN for Dummies" class="svelte-eh19e8"></div></div></section>`;
  bind_props($$props, { index });
}
const pageFlip = "/_app/immutable/assets/psn-audio-page-flip.BF8gG8iN.mp3";
const gameOver = "/_app/immutable/assets/psn-audio-game-over.CYQBJcD1.mp3";
const gameWin = "/_app/immutable/assets/psn-audio-success.D8l5QRPr.mp3";
function Container($$payload) {
  let index = 0;
  let bgAudio;
  let goAudio;
  let winAudio;
  if (index >= 1) {
    if (index == 23) {
      goAudio.play();
    } else if (index == 24) {
      goAudio.play();
    } else if (index == 14) {
      winAudio.play();
    } else {
      bgAudio.play();
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section${add_styles({
      height: index <= 2 ? "100dvh" : "(100dvh - 150px)"
    })} class="svelte-4kn5hw">`;
    if (index == 0) {
      $$payload2.out += "<!--[-->";
      Start($$payload2, {
        get index() {
          return index;
        },
        set index($$value) {
          index = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
      if (index >= 1 && index <= 2) {
        $$payload2.out += "<!--[-->";
        Intro($$payload2, {
          get index() {
            return index;
          },
          set index($$value) {
            index = $$value;
            $$settled = false;
          }
        });
      } else {
        $$payload2.out += "<!--[!-->";
        Game($$payload2, {
          get index() {
            return index;
          },
          set index($$value) {
            index = $$value;
            $$settled = false;
          }
        });
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></section> <audio${attr("src", pageFlip)}></audio> <audio${attr("src", gameOver)}></audio> <audio${attr("src", gameWin)}></audio>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&amp;family=Lexend+Giga:wght@100..900&amp;display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet">`;
  });
  Container($$payload);
}
export {
  _page as default
};
