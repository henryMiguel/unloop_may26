// Speaker talk data - organize by speaker name
const speakerData = {
  "Rita Malaquias": {
    title: "Deception By Design: Anti-Piracy Deception In Video Games",
    location: "In Person",
    description:
      "Anti-piracy in video games often relies on DRM systems that block access to the game for unauthorised users, but some games take a different approach: they alter how the game works, either by making progression harder, presenting unfair outcomes, or simply behaving strangely. This turns anti-piracy design mechanisms as part of the game experience itself, usually subverting players’ expectations. This extended abstract explores how these alternative anti-piracy mechanisms work as designed experiences.",
  },
  "Maddalena Grattarola": {
    title:
      "Cozy Cracks: Involuntary Diegetic Friction and Reflective Play in Domestic Game Spaces ",
    location: "Remote",
    description:
      "Cozy games are designed to minimise friction, yet this paper argues that domestic game spaces inevitably produce what it terms involuntary diegetic friction: interpretive interruption that emerges from the biographical and material weight of domestic objects, rather than from deliberate design. Through close analysis of four recent games (Unpacking, Undusted: Letters from the Past, A Little to the Left, and Hozy), the paper identifies four distinct friction modes: hermeneutic, durational, systemic, and environmental. These modes resist reward-loop automation and extend Benedetti and Mauri’s diegetic/extra-diegetic framework by identifying friction emergent from domestic game spaces. ",
  },
  "Ana Luísa Ferreira, Andreia Pinto de Sousa": {
    title:
      "The Subversion of User-Friendly Design: Engagement Algorithms and the Erosion of Agency in the Attention Economy",
    location: "In Person",
    description:
      'This study examines the ethical inversion of User Experience (UX) design within the attention economy. It adopts the concept of Attention-Capture Damaging Patterns (ACDP) to identify mechanisms that exploit psychological vulnerabilities (such as infinite scroll and autoplay) to maximise retention at the expense of user autonomy. As a solution, the proposed framework introduces "ethical friction": deliberate design interventions that disrupt automatic cycles and restore agency. The work redefines usability, suggesting "Attention Efficiency" as a new metric to align design with human well-being and sovereignty.',
  },
  "Arthur Kuhn": {
    title:
      "Narrative Wandering: Infinite Hallways in Video Games as a Storytelling Trope ",
    location: "Remote",
    description:
      "This paper offers a media archeological retelling of the use of hallways in video games. Starting as a technical and utilitarian element used to hide limitations, to become a narrative tool and even a trope or genre in itself. Based on contemporary examples of hallway-centric game designs, it offers an analysis of how such a design can operate, as well as a proposed challenge to go beyond one of its thematic limitations. ",
  },
  "Rosemary Lee, Risk Hazekamp": {
    title: "Otherworldly Encounters: Wild Anecdotes on Interspecies Care",
    location: "In Person",
    description:
      "This presentation emerges from practice-based art & design research, in which ‘otherworldly’ expressions of agency by our More-Than-Human co-researchers have been witnessed. Drawing on these experiences,  we reflect on the position and situatedness of our human embodied, messy and opaque relationality with the More-Than-Human. Following María Puig de la Bellacasa, we shed light on the many blind spots regarding the (un)necessity of human care for other species, which sometimes even result in forms of ‘violent care’. By asking why organisms wish to collaborate with us, we subvert human-centred power hierarchies and open up the question of More-Than-Human consent. ",
  },
  "Gaston Welisch": {
    title:
      "Oracular interfaces: Epistemic Mischief as a Method for Playful Friction to Subvert AI Systems through Divination and Magic metaphors ",
    location: "Remote",
    description:
      ' \“Oracular Interfaces\” are interactive works which call into question the conversational authority of AI systems. This paper presents two case studies: BIRD, a webcam augury platform, and House of IFs, an agentic omen system based on daily news. These works introduce playful friction to make ubiquitous AI systems "strange". What they are positioned against is Generative AI\'s "frictionless fluency", its eloquence which leaves little space, or creative friction, for working out interpreted meaning. The wider design workbook they form creates conditions in which the values embedded in current AI interfaces can be made available, in oblique ways, for critical thought.',
  },
  "Verena Friedrich": {
    title:
      "Inside the Black Box: Situated Decision-Making and Automation in the Art Installation “EZ Quality Sorter”  ",
    location: "In Person",
    description:
      "The EZ Quality Sorter is an interactive art installation that invites visitors to support a machine in the quality sorting of pea seeds. Without predefined sorting criteria, visitors must establish their own: What makes a pea good or bad? By whose standards? In which context? This ambiguity generates friction – not as a flaw in the interface, but as its central mechanism. By reintroducing the human into an otherwise automated process, the installation turns the logic of industrial automation inside out, raising questions about agency, responsibility, and bias in the delegation of decision-making to automated systems, while transforming friction into a critical and aesthetic strategy. ",
  },
  "Wolfgang Strauss": {
    title: "From Flow to Friction: Thinking Spaces in VR and AI ",
    location: "In Person",
    description:
      "This article critiques interaction design’s ideal of frictionless “flow,” distinguishing automatic engagement from the flow of thought and arguing that seamless interfaces constrain meaning-making. As an alternative, it proposes the thinking space as a performative interface paradigm that makes operations perceptible through thresholds, interruption, ambiguity, play, and productive disagreement. Grounded in digital art practice and artistic research (late 1980s–2026), it draws on examples from VR, mixed reality, semantic knowledge interfaces, and AI-mediated dialogical installations. Ultimately, it frames epistemic friction as a cultural and aesthetic resource for sustaining critical distance and reflective agency. ",
  },
  "Henrique Miguel, Lara Portelinha": {
    title:
      "Companionship Mechanics in AI-Driven Character Platforms: Deceptive and Friction Design in Character.ai ",
    location: "In Person",
    description:
      "This paper examines how conversational AI companion platforms such as Character.ai structure user engagement through highly customizable interaction systems that reinforce flow and addiction-oriented behaviors. Combining interface analysis with literature on AI companions, flow, deceptive patterns, and friction design, this study identifies how mechanics such as memory curation, response regeneration, editing, and narrative branching minimize conversational consequence while maximizing immersion and emotional responsiveness. Rather than arguing for the proscription of AI companions, this paper proposes friction design interventions capable of introducing reflection, uncertainty, and consequence into otherwise seamless interactions, fostering critical and meaningful forms of human-AI engagement. ",
  },
  "Marco Heleno": {
    title:
      "Productive Friction for Explainable AI Visualisation: Facilitating Genuine Understanding for Non-Experts",
    location: "In Person",
    description:
      "The extended abstract challenges the dominant frictionless paradigm in Explainable Artificial Intelligence (XAI), which prioritises usability and simplification over deep cognitive engagement. Drawing on the Perceptron Decision Explainer, the study applies a productive friction framework to demonstrate how calibrated friction — cognitive, procedural, affective and technical — serves as a constitutive condition of genuine understanding rather than an obstacle to it. Empirical validation through semi-structured interviews and Think-Aloud sessions confirms that productive friction empowers non-expert users to actively construct understanding of the Perceptron’s decision-making process, establishing a constructive and critical path towards effective AI literacy.",
  },
  "Caio Gonçalves, Berenice Gonçalves": {
    title:
      "Using Narrative to Identify Frictions: A process for Requirements Definition in Software Projects ",
    location: "Remote",
    description:
      "This study reinterprets friction design through the perspective of requirements engineering and proposes a narrative-based process for defining friction requirements in software projects. While friction is often treated as a usability issue, intentional friction can encourage reflection, reduce errors, and improve user awareness. The proposed process integrates friction design principles with requirements engineering and narrative techniques such as scenarios, storyboards, user journeys, and user stories. The workflow comprises six stages, from project contextualization to requirements validation, supporting the identification, translation, and management of friction points as design requirements throughout software development.",
  },
  "Matilde Fernandes": {
    title: "FLOP: Failures Lead to Original Perspectives",
    location: "In Person",
    description:
      "FLOP is a phygital serious game developed at Fraunhofer Portugal AICOS, that proposes to investigate whether aesthetic friction can mediate socially difficult conversations, specifically, the fear of failure in pedagogical contexts. Drawing on somatic and interdisciplinary research, failure is framed as a biologically conditioned avoidance response. While dominant HCD paradigms prioritise flow and satisfaction, FLOP's first frictionless prototype revealed their limitations, as comfort lets users engage with failure technically without processing it meaningfully. Through Research-through-Design, the second iteration positions aesthetic friction as the mechanism through which deliberate discomfort may sustain players’ engagement long enough for reflection to occur. ",
  },
  "Tehreem Hassan": {
    title:
      "Not Everything Resolves: Rethinking Menopause Beyond User-Centred Design",
    location: "Remote",
    description:
      "This paper critiques dominant user-centred approaches to menopause within Human-Computer Interaction (HCI), arguing that existing systems reduce lived experience into measurable symptoms and linear narratives of management and resolution. Drawing on feminist HCI, reflective interaction, Actor-Network Theory, and narrative design, it reframes menopause as an evolving, relational, and ambiguous experience that resists simplification. Rather than prioritising optimisation, efficiency, and clarity, the paper explores how narrative and non-linear design approaches can support interpretation, reflection, and meaning-making. It proposes an alternative orientation for menopause literacy that sustains uncertainty, contradiction, and multiplicity as essential aspects of embodied experience.",
  },
  "Hugo Ramos": {
    title: "Enraging the Loop: Rage as Aesthetic Friction in Play",
    location: "In Person",
    description:
      "Rage games, a genre designed to deliberately provoke frustration and anger, challenge dominant paradigms in game design by replacing comfort and flow with emotional volatility and aesthetic friction. These games transform failure, rage and discomfort into core drivers of player engagement and meaning-making. This extended abstract examines how rage games disrupt flow theory, sustain frustration as a productive force, and break the hedonistic loop. It further explores how the principles that underlie rage games may inform broader interaction design practices, proposing aesthetic friction as a meaningful alternative to seamless experience design.",
  },
  "Sara Orsi": {
    title:
      "Paradoxical Temporalities of Computation: Critical and Speculative Practices ",
    location: "In Person",
    description:
      "Computation can contain within itself a paradox: although deterministic, it can also be irreducible. This means that it cannot be reduced to a static representation, since to obtain a result it must be executed step by step, generating inevitable limits of anticipation. Adopting a methodology that combines theoretical research with practice-based research, this article departs from this paradox to explore how the frictions resulting from the hiatus between code and its execution can be intentionally mobilised in artistic and design practices as a critical and speculative space. ",
  },
  "Deanna Gelosi": {
    title: "Underdetermined Fingerpainting as Playful Friction",
    location: "Remote",
    description:
      "Computational fabrication pipelines are typically organized to minimize the distance between intention and outcome. This extended abstract proposes underdetermined fingerpainting — mounting a human finger in a pen plotter to trace computationally generated paths through wet paint — as a provocation for loosening this loop. The practice surfaces three frictions: material, mechanical, and epistemic. Executing the same path repeatedly makes the machine legible through exact precision, while paint that pools, resists, and dries differently each time exposes the material's own agency. This points toward creativity-expansive tooling as an orientation: fabrication tools that sustain friction and play rather than optimizing them away.",
  },
  "Joana Pestana": {
    title:
      "Designing Ecocentric AI: Rethinking Ecosystem Representation in Large Language Models",
    location: "In Person",
    description:
      "Amid the climate crisis and the growing adoption of artificial intelligence (AI), it is necessary to question how AI systems represent ecological realities and whose knowledge they privilege. This article examines the capitalist, Western, and anthropocentric assumptions embedded in Large Language Models (LLMs) and asks how ecosystems are structured within their knowledge representations. Through an artistic atlas derived from an LLM document store, the paper visualizes ecological concepts and relations encoded in embedding space, exposing the classificatory logics and omissions of computational representations. It concludes by outlining design considerations for cultivating more plural, situated, and ecocentric approaches to AI development and knowledge curation.",
  },
  "Umut Gunduz": {
    title:
      "The Poetic Image of the Machine: Dark Cartographies, Machinic Desire, and the Disruption of Flow",
    location: "Remote",
    description:
      "This paper proposes the poetic image of the machine as a new theoretical object: the image that emerges in a subject whose interiority has been restructured by cohabitation with computational systems. Drawing on Bachelard, Baudrillard, Serres, Morton, and Moynihan, it argues that the imagination has been colonised by a hyperobject it cannot fully sense. Practice-based research in installation and automated game systems is positioned as dark cartography — sigils that navigate this colonised interior. The disruption of flow is reframed as an ontological event that releases the gothic, machinic entities the optimised loop was built to suppress.",
  },
  "Catherine Griffiths": {
    title: "Ontology Design in the Age of Climate Collapse",
    location: "In Person",
    description: "This paper proposes the use of \"Ontology Design\" as a method for using graph-based databases to visualize the competing world views encoded in algorithmic systems. Grounded in fieldwork with the climate activist group Just Stop Oil in London, it maps two contrasting ontologies side by side: that of the activists and that of the police and state response. By rendering these formal world views legible, the project argues that algorithms are never neutral but make ideological arguments. It frames Ontology Design as a practice of accountability and political imagination, asking whose world a given tool is building.",
  },
};

// Initialize dropdowns on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeSpeakerDropdowns();
});

function initializeSpeakerDropdowns() {
  // Get all speaker list items
  const speakerItems = document.querySelectorAll(".session-speakers li");

  speakerItems.forEach((item) => {
    // Extract speaker name from the text content
    const speakerNameNode = Array.from(item.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (!speakerNameNode) return;

    const fullText = speakerNameNode.textContent.trim();
    // Remove the speaker mode part to get just the name
    const speakerName = fullText.replace(/\s*\(.*?\)\s*$/, "").trim();

    // Get data if it exists
    const data = speakerData[speakerName];
    if (!data) return;

    // Add clickable class and set cursor
    item.classList.add("speaker-clickable");
    item.style.cursor = "pointer";

    // Create dropdown content
    const dropdown = document.createElement("div");
    dropdown.classList.add("speaker-dropdown");
    dropdown.innerHTML = `
      <div class="speaker-dropdown-content">
        <h4>${data.title}</h4>
        ${data.location ? `<p class="speaker-location">${data.location}</p>` : ""}
        <p>${data.description}</p>
      </div>
    `;

    // Insert dropdown after the li
    item.appendChild(dropdown);

    // Add click handler
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown(this);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    const openDropdowns = document.querySelectorAll(".speaker-dropdown.active");
    openDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  });
}

function toggleDropdown(speakerItem) {
  const dropdown = speakerItem.querySelector(".speaker-dropdown");
  if (!dropdown) return;

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll(".speaker-dropdown");
  allDropdowns.forEach((d) => {
    if (d !== dropdown) {
      d.classList.remove("active");
    }
  });

  // Toggle current dropdown
  dropdown.classList.toggle("active");
}
