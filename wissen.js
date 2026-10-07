const KNOWLEDGE_HTML = `
<!-- Hauptbereich: Grundlagen agiler Entwicklung -->
<section id="agile" class="ksection">
<header>
<span>01</span>
<div>
<em>ÜBERBLICK</em>
<h2>Agile Entwicklung</h2>
</div>
</header>
<p class="lead">
<strong>Agile Softwareentwicklung</strong> ist eine iterative und inkrementelle Arbeitsweise. Anforderungen werden in kleine, verständliche Einheiten zerlegt, priorisiert und schrittweise umgesetzt. Ergebnisse und Rückmeldungen fließen regelmäßig in die weitere Planung ein.</p>
<div class="cards three">
<article>
<b>01 Direktes Kundenfeedback</b>
<p>Frühe Rückmeldung verringert das Risiko, am tatsächlichen Bedarf vorbeizuplanen.</p>
</article>
<article>
<b>02 Schnelle Anpassung</b>
<p>Kleine Arbeitspakete und kurze Lernzyklen erleichtern Reaktionen auf Veränderungen.</p>
</article>
<article>
<b>03 Kontinuierliche Verbesserung</b>
<p>Produkt, Zusammenarbeit und Prozess werden regelmäßig überprüft und verbessert.</p>
</article>
</div>
<aside class="note">
<strong>Abgrenzung:</strong> Agilität beschreibt Werte und Prinzipien. Scrum ist ein Framework. Kanban ist eine Managementmethode, die einen bestehenden Arbeitsprozess verbessert.</aside>
</section>
<!-- Hauptbereich: Scrum-Framework -->
<section id="scrum" class="ksection">
<header>
<span>02</span>
<div>
<em>FRAMEWORK</em>
<h2>Scrum</h2>
</div>
</header>
<p class="intro">Scrum ist ein agiles Framework für das Projekt- und Produktmanagement, das komplexe Vorhaben in kurzen, wiederkehrenden Zyklen (sogenannten Sprints) bearbeitet.</p>
<figure class="visual scrum-schema">
<img src="assets/scrum-schema.png" alt="Schema des Scrum-Frameworks">
</figure>
<div class="cards three">
<article>
<h3>Verantwortlichkeiten</h3>
<ul>
<li>
<b>Product Owner:</b> verantwortlich für das Product Backlog (Anpassungen / Priorisierungen) und in sehr engem Austausch mit den Stakeholdern.</li>
<li>
<b>Scrum Master:</b> unterstützt die wirksame Anwendung von Scrum.</li>
<li>
<b>Developers:</b> erstellen in jedem Sprint ein nutzbares Increment.</li>
</ul>
</article>
<article>
<h3>Artefakte &amp; Commitments</h3>
<ul>
<li>Product Backlog mit Product Goal</li>
<li>Sprint Backlog mit Sprint Goal</li>
<li>Increment mit Definition of Done</li>
</ul>
</article>
<article>
<h3>Ereignisse</h3>
<ul>
<li>Sprint, maximal ein Monat</li>
<li>Sprint Planning</li>
<li>Daily Scrum, 15 Minuten</li>
<li>Sprint Review</li>
<li>Sprint Retrospective</li>
</ul>
</article>
</div>
<div class="cards two">
<article>
<h3>Sprint Planning</h3>
<p>Das Scrum Team klärt gemeinsam, warum der Sprint wertvoll ist, was umgesetzt werden kann und wie die ausgewählte Arbeit erledigt wird.</p>
</article>
<article>
<h3>Daily Scrum</h3>
<p>Die Developers prüfen den Fortschritt zum Sprint Goal und passen den Plan an. Das Daily ist kein Statusbericht an Führungskräfte.</p>
</article>
<article>
<h3>Sprint Review</h3>
<p>Scrum Team und Stakeholder betrachten das Ergebnis, Veränderungen und mögliche nächste Schritte.</p>
</article>
<article>
<h3>Sprint Retrospective</h3>
<p>Das Team plant Verbesserungen für Qualität, Zusammenarbeit, Prozesse und Werkzeuge.</p>
</article>
</div>
<figure class="placeholder">
<img src="assets/sprint-planning.png" alt="Sprint-Planning-Visualisierung">
<div>
<b>Bildplatzhalter</b>
<strong>Sprint-Planning-Visualisierung</strong>
<code>assets/sprint-planning.png</code>
<small>Bild später unter diesem Dateinamen hochladen.</small>
</div>
</figure>
</section>
<!-- Hauptbereich: Kanban und Arbeitsfluss -->
<section id="kanban" class="ksection">
<header>
<span>03</span>
<div>
<em>ARBEITSFLUSS</em>
<h2>Kanban</h2>
</div>
</header>
<p class="intro">Kanban visualisiert Wissensarbeit und deren Bewegung durch einen Workflow. Begrenzte parallele Arbeit unterstützt Fokus und Fluss.</p>
<div class="kanban visual">
<div>
<h4>Backlog <small>4</small>
</h4>
<p>Anforderung klären</p>
<p>Schnittstelle prüfen</p>
<p>Testdaten</p>
</div>
<div>
<h4>Geplant <small>2</small>
</h4>
<p>Story verfeinern</p>
<p>Akzeptanzkriterien</p>
</div>
<div>
<h4>In Arbeit <small>2/2 WIP</small>
</h4>
<p>Funktion umsetzen</p>
<p>Unit Tests</p>
</div>
<div>
<h4>Im Test <small>1/2 WIP</small>
</h4>
<p>Integration testen</p>
</div>
<div>
<h4>Erledigt <small>2</small>
</h4>
<p class="done">Review</p>
<p class="done">Dokumentation</p>
</div>
</div>
<div class="cards three">
<article>
<h3>Visualisieren</h3>
<p>Arbeit, Ablauf, Regeln, Blockaden und Risiken sichtbar machen.</p>
</article>
<article>
<h3>WIP begrenzen</h3>
<p>Work in Progress an die verfügbare Kapazität anpassen.</p>
</article>
<article>
<h3>Fluss steuern</h3>
<p>Arbeit gleichmäßig und vorhersehbar durch das System bewegen.</p>
</article>
<article>
<h3>Regeln explizit machen</h3>
<p>Kriterien und Arbeitsregeln gemeinsam vereinbaren.</p>
</article>
<article>
<h3>Feedbackschleifen</h3>
<p>Regelmäßig mit Daten lernen und anpassen.</p>
</article>
<article>
<h3>Gemeinsam verbessern</h3>
<p>Schrittweise und experimentell weiterentwickeln.</p>
</article>
</div>
<aside class="note">
<strong>Pull-Prinzip:</strong> Neue Arbeit wird übernommen, wenn im nachgelagerten Schritt Kapazität frei ist.</aside>
</section>
<!-- Hauptbereich: Anforderungen und Refinement -->
<section id="refinement" class="ksection">
<header>
<span>04</span>
<div>
<em>ANFORDERUNGEN</em>
<h2>Refinement</h2>
</div>
</header>
<p class="intro">Refinement ist die fortlaufende Verfeinerung des Product Backlogs. Einträge werden zerlegt, konkretisiert, geordnet und mit notwendigen Details ergänzt. Refinement ist im Scrum Guide eine Aktivität, jedoch kein eigenes Scrum Event.</p>
<div class="steps">
<article>
<b>1</b>
<h3>Klären</h3>
<p>Ziel, Nutzen, Randbedingungen und offene Fragen verstehen.</p>
</article>
<article>
<b>2</b>
<h3>Zerlegen</h3>
<p>Große Anforderungen in lieferbare Einheiten aufteilen.</p>
</article>
<article>
<b>3</b>
<h3>Vorbereiten</h3>
<p>Akzeptanzkriterien, Abhängigkeiten, Priorität und Aufwand transparent machen.</p>
</article>
</div>
<div class="cards two">
<article>
<h3>Typische Verantwortungen</h3>
<ul>
<li>
<b>Product Owner:</b> Nutzen, Ordnung und verständliche Zielsetzung.</li>
<li>
<b>Developers:</b> Machbarkeit, Risiken, Abhängigkeiten und Aufwand.</li>
<li>
<b>Stakeholder:</b> Domänenwissen und Rückmeldung bei Bedarf.</li>
</ul>
</article>
<article>
<h3>Qualitätsfragen</h3>
<ul>
<li>Ist der fachliche Nutzen verständlich?</li>
<li>Ist die Anforderung klein genug?</li>
<li>Sind Akzeptanzkriterien prüfbar?</li>
<li>Sind Abhängigkeiten und Risiken bekannt?</li>
</ul>
</article>
</div>
<div class="guidelines">
<h3>Neun Leitlinien für gutes Requirements Engineering</h3>
<ol>
<li>Wertorientierung</li>
<li>Gemeinsames Verständnis</li>
<li>Kontextbezug</li>
<li>Problemorientierung</li>
<li>Validierung</li>
<li>Evolution</li>
<li>Innovation</li>
<li>Systematische Arbeit</li>
<li>Qualitätssicherung</li>
</ol>
</div>
</section>
<!-- Hauptbereich: PI Planning und Skalierung -->
<section id="pi" class="ksection">
<header>
<span>05</span>
<div>
<em>SKALIERUNG</em>
<h2>PI Planning</h2>
</div>
</header>
<p class="intro">PI Planning ist ein taktbasiertes Planungsereignis für einen Agile Release Train (ART). Teams und Stakeholder richten sich auf eine gemeinsame Mission aus, planen PI Objectives, machen Abhängigkeiten sichtbar und behandeln Risiken.</p>
<div class="agenda visual">
<h3>PI Planning Agenda <small>typischer zweitägiger Ablauf</small>
</h3>
<div>
<article>
<h4>Tag 1 · Ausrichten &amp; Entwurf</h4>
<p>
<time>08:00</time>
<b>Business Context</b>
<span>Strategische Ausgangslage und Ziele</span>
</p>
<p>
<time>09:00</time>
<b>Product/Solution Vision</b>
<span>Vision, Roadmap, Prioritäten</span>
</p>
<p>
<time>10:30</time>
<b>Architecture Vision</b>
<span>Architektur und Leitplanken</span>
</p>
<p>
<time>11:30</time>
<b>Planning Context</b>
<span>Ablauf und Ergebnisse</span>
</p>
<p>
<time>13:00</time>
<b>Team Breakouts 1</b>
<span>Kapazität, Stories, Ziele, Risiken</span>
</p>
<p>
<time>16:00</time>
<b>Draft Plan Review</b>
<span>Planentwürfe prüfen</span>
</p>
<p>
<time>17:00</time>
<b>Management Review</b>
<span>Probleme lösen</span>
</p>
</article>
<article>
<h4>Tag 2 · Finalisieren &amp; Commit</h4>
<p>
<time>08:00</time>
<b>Planning Adjustments</b>
<span>Anpassungen vermitteln</span>
</p>
<p>
<time>09:00</time>
<b>Team Breakouts 2</b>
<span>Pläne und PI Objectives finalisieren</span>
</p>
<p>
<time>13:00</time>
<b>Final Plan Review</b>
<span>Endgültige Pläne vorstellen</span>
</p>
<p>
<time>14:00</time>
<b>ART PI Risks</b>
<span>Risiken behandeln</span>
</p>
<p>
<time>15:00</time>
<b>Confidence Vote</b>
<span>Vertrauen bewerten</span>
</p>
<p>
<time>15:30</time>
<b>Plan Rework</b>
<span>Bei Bedarf überarbeiten</span>
</p>
<p>
<time>16:00</time>
<b>Retrospective</b>
<span>Planung verbessern</span>
</p>
</article>
</div>
</div>
<div class="cards two">
<article>
<h3>Ergebnisse</h3>
<ul>
<li>Abgestimmte PI Objectives</li>
<li>ART Planning Board mit Abhängigkeiten</li>
<li>Behandelte ART-Risiken</li>
<li>Gemeinsames Verständnis von Vision und Plan</li>
</ul>
</article>
<article>
<h3>Beteiligte</h3>
<ul>
<li>Business Owners und Product Management</li>
<li>System Architecture</li>
<li>Release Train Engineer (RTE)</li>
<li>Agile Teams und relevante Stakeholder</li>
</ul>
</article>
</div>
</section>
<!-- Quellen am Ende des Wissensbereichs -->
<section class="sources">
<h2>Fachliche Quellen</h2>
<a href="https://scrumguides.org/scrum-guide.html">Scrum Guide 2020</a>
<a href="https://kanban.university/kanban-guide/">Official Kanban Guide</a>
<a href="https://framework.scaledagile.com/blog/glossary_term/pi-planning/">Scaled Agile: PI Planning</a>
</section>`;
