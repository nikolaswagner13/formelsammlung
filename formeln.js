const FORMULAS = [
  {
    "id": "quadratische-gleichung",
    "title": "Quadratische Gleichung",
    "category": "Mathematische Grundlagen",
    "formula": "x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
    "explanation": "Berechnet die Nullstellen einer quadratischen Gleichung der Form a·x² + b·x + c = 0.",
    "symbols": [
      [
        "a, b, c",
        "Koeffizienten",
        "–"
      ],
      [
        "x₁, x₂",
        "Lösungen beziehungsweise Nullstellen",
        "–"
      ]
    ],
    "tip": "Der Ausdruck b² − 4ac heißt Diskriminante. Ist er negativ, gibt es keine reellen Lösungen.",
    "source": "Mathematische Grundformel",
    "updated": "07.10.2026"
  },
  {
    "id": "dreisatz",
    "title": "Proportionaler Dreisatz",
    "category": "Mathematische Grundlagen",
    "formula": "x=\\frac{b\\cdot c}{a}",
    "explanation": "Bestimmt eine unbekannte proportionale Größe aus drei bekannten Werten.",
    "symbols": [
      [
        "a",
        "bekannter Ausgangswert",
        "abhängig von Aufgabe"
      ],
      [
        "b, c",
        "bekannte Vergleichswerte",
        "abhängig von Aufgabe"
      ],
      [
        "x",
        "gesuchter Wert",
        "abhängig von Aufgabe"
      ]
    ],
    "tip": "Vor der Rechnung prüfen, ob die Größen wirklich direkt proportional sind.",
    "source": "Mathematische Grundformel",
    "updated": "07.10.2026"
  },
  {
    "id": "geschwindigkeit",
    "title": "Geschwindigkeit",
    "category": "Physikalische Grundlagen",
    "formula": "v=\\frac{s}{t}",
    "explanation": "Die Geschwindigkeit ist der zurückgelegte Weg je benötigter Zeit.",
    "symbols": [
      [
        "v",
        "Geschwindigkeit",
        "m/s"
      ],
      [
        "s",
        "Weg",
        "m"
      ],
      [
        "t",
        "Zeit",
        "s"
      ]
    ],
    "tip": "Für km/h nach m/s durch 3,6 teilen. Für m/s nach km/h mit 3,6 multiplizieren.",
    "source": "Kinematik-Grundgleichung",
    "updated": "07.10.2026"
  },
  {
    "id": "beschleunigung",
    "title": "Beschleunigung",
    "category": "Physikalische Grundlagen",
    "formula": "a=\\frac{\\Delta v}{\\Delta t}",
    "explanation": "Beschreibt, wie stark sich die Geschwindigkeit innerhalb einer Zeitspanne ändert.",
    "symbols": [
      [
        "a",
        "Beschleunigung",
        "m/s²"
      ],
      [
        "Δv",
        "Geschwindigkeitsänderung",
        "m/s"
      ],
      [
        "Δt",
        "Zeitspanne",
        "s"
      ]
    ],
    "tip": "Eine negative Beschleunigung beschreibt eine Verzögerung, sofern die positive Bewegungsrichtung beibehalten wird.",
    "source": "Kinematik-Grundgleichung",
    "updated": "07.10.2026"
  },
  {
    "id": "kraft",
    "title": "Kraft",
    "category": "Mechanik",
    "formula": "F=m\\cdot a",
    "explanation": "Eine Kraft beschleunigt eine Masse. Die Formel ist das zweite Newtonsche Gesetz.",
    "symbols": [
      [
        "F",
        "Kraft",
        "N"
      ],
      [
        "m",
        "Masse",
        "kg"
      ],
      [
        "a",
        "Beschleunigung",
        "m/s²"
      ]
    ],
    "tip": "1 Newton entspricht 1 kg·m/s².",
    "source": "Zweites Newtonsches Gesetz",
    "updated": "07.10.2026"
  },
  {
    "id": "drehmoment",
    "title": "Drehmoment",
    "category": "Mechanik",
    "formula": "M=F\\cdot r",
    "explanation": "Das Drehmoment ist die drehende Wirkung einer Kraft im Abstand zur Drehachse.",
    "symbols": [
      [
        "M",
        "Drehmoment",
        "Nm"
      ],
      [
        "F",
        "tangentiale Kraft",
        "N"
      ],
      [
        "r",
        "wirksamer Hebelarm",
        "m"
      ]
    ],
    "tip": "Die Kraft muss senkrecht zum Hebelarm wirken. Allgemein gilt M = F·r·sin(α).",
    "source": "Technische Mechanik",
    "updated": "07.10.2026"
  },
  {
    "id": "arbeit",
    "title": "Mechanische Arbeit",
    "category": "Mechanik",
    "formula": "W=F\\cdot s",
    "explanation": "Mechanische Arbeit wird verrichtet, wenn eine Kraft einen Körper entlang eines Weges bewegt.",
    "symbols": [
      [
        "W",
        "Arbeit",
        "J"
      ],
      [
        "F",
        "Kraft in Bewegungsrichtung",
        "N"
      ],
      [
        "s",
        "Weg",
        "m"
      ]
    ],
    "tip": "Bei einem Winkel α zwischen Kraft und Weg gilt W = F·s·cos(α).",
    "source": "Technische Mechanik",
    "updated": "07.10.2026"
  },
  {
    "id": "mechanische-leistung",
    "title": "Mechanische Leistung",
    "category": "Mechanik",
    "formula": "P=\\frac{W}{t}",
    "explanation": "Die Leistung gibt an, wie viel Arbeit pro Zeit verrichtet wird.",
    "symbols": [
      [
        "P",
        "Leistung",
        "W"
      ],
      [
        "W",
        "Arbeit",
        "J"
      ],
      [
        "t",
        "Zeit",
        "s"
      ]
    ],
    "tip": "1 Watt entspricht 1 Joule pro Sekunde.",
    "source": "Technische Mechanik",
    "updated": "07.10.2026"
  },
  {
    "id": "rotationsleistung",
    "title": "Leistung einer rotierenden Welle",
    "category": "Motoren",
    "formula": "P=M\\cdot\\omega=M\\cdot2\\pi\\frac{n}{60}",
    "explanation": "Verknüpft Drehmoment und Drehzahl mit der mechanischen Wellenleistung.",
    "symbols": [
      [
        "P",
        "mechanische Leistung",
        "W"
      ],
      [
        "M",
        "Drehmoment",
        "Nm"
      ],
      [
        "ω",
        "Winkelgeschwindigkeit",
        "rad/s"
      ],
      [
        "n",
        "Drehzahl",
        "1/min"
      ]
    ],
    "tip": "Praxisformel: P [kW] = M [Nm] · n [1/min] / 9550.",
    "source": "Grundgleichung der Rotationsleistung",
    "updated": "07.10.2026"
  },
  {
    "id": "motordrehmoment",
    "title": "Motordrehmoment aus Leistung",
    "category": "Motoren",
    "formula": "M=\\frac{9550\\cdot P}{n}",
    "explanation": "Berechnet das Drehmoment aus Leistung und Drehzahl in üblichen Einheiten der Antriebstechnik.",
    "symbols": [
      [
        "M",
        "Drehmoment",
        "Nm"
      ],
      [
        "P",
        "Leistung",
        "kW"
      ],
      [
        "n",
        "Drehzahl",
        "1/min"
      ]
    ],
    "tip": "Die Konstante 9550 gilt nur für P in kW und n in 1/min.",
    "source": "Aus P = M·ω abgeleitet",
    "updated": "07.10.2026"
  },
  {
    "id": "winkelgeschwindigkeit",
    "title": "Winkelgeschwindigkeit",
    "category": "Motoren",
    "formula": "\\omega=2\\pi\\frac{n}{60}",
    "explanation": "Rechnet eine Drehzahl in Umdrehungen pro Minute in die Winkelgeschwindigkeit um.",
    "symbols": [
      [
        "ω",
        "Winkelgeschwindigkeit",
        "rad/s"
      ],
      [
        "n",
        "Drehzahl",
        "1/min"
      ]
    ],
    "tip": "Eine vollständige Umdrehung entspricht 2π Radiant.",
    "source": "Kinematik der Rotation",
    "updated": "07.10.2026"
  },
  {
    "id": "wirkungsgrad-motor",
    "title": "Wirkungsgrad eines Motors",
    "category": "Motoren",
    "formula": "\\eta=\\frac{P_{mech}}{P_{el}}",
    "explanation": "Setzt die abgegebene mechanische Leistung ins Verhältnis zur aufgenommenen elektrischen Leistung.",
    "symbols": [
      [
        "η",
        "Wirkungsgrad",
        "– oder %"
      ],
      [
        "Pmech",
        "mechanische Ausgangsleistung",
        "W"
      ],
      [
        "Pel",
        "elektrische Eingangsleistung",
        "W"
      ]
    ],
    "tip": "Für Prozentangaben den Dezimalwert mit 100 multiplizieren.",
    "source": "Energieerhaltung und Verlustbetrachtung",
    "updated": "07.10.2026"
  },
  {
    "id": "uebersetzung",
    "title": "Getriebeübersetzung",
    "category": "Getriebe",
    "formula": "i=\\frac{n_1}{n_2}=\\frac{z_2}{z_1}=\\frac{d_2}{d_1}",
    "explanation": "Beschreibt das Verhältnis zwischen Antriebs- und Abtriebsdrehzahl beziehungsweise zwischen Zahnzahlen.",
    "symbols": [
      [
        "i",
        "Übersetzungsverhältnis",
        "–"
      ],
      [
        "n₁, n₂",
        "Antriebs- und Abtriebsdrehzahl",
        "1/min"
      ],
      [
        "z₁, z₂",
        "Zähnezahlen",
        "–"
      ],
      [
        "d₁, d₂",
        "Teilkreisdurchmesser",
        "mm"
      ]
    ],
    "tip": "Bei i > 1 wird ins Langsame untersetzt. Die Abtriebsdrehzahl sinkt und das Drehmoment steigt.",
    "source": "Grundgleichung für Zahnradgetriebe",
    "updated": "07.10.2026"
  },
  {
    "id": "abtriebsdrehzahl",
    "title": "Abtriebsdrehzahl",
    "category": "Getriebe",
    "formula": "n_2=\\frac{n_1}{i}",
    "explanation": "Berechnet die Drehzahl am Getriebeabtrieb aus Motordrehzahl und Übersetzung.",
    "symbols": [
      [
        "n₂",
        "Abtriebsdrehzahl",
        "1/min"
      ],
      [
        "n₁",
        "Antriebsdrehzahl",
        "1/min"
      ],
      [
        "i",
        "Übersetzungsverhältnis",
        "–"
      ]
    ],
    "tip": "Bei einer Untersetzung i > 1 ist n₂ kleiner als n₁.",
    "source": "Aus der Definition i = n₁/n₂",
    "updated": "07.10.2026"
  },
  {
    "id": "abtriebsdrehmoment",
    "title": "Abtriebsdrehmoment",
    "category": "Getriebe",
    "formula": "M_2=M_1\\cdot i\\cdot\\eta",
    "explanation": "Berechnet das reale Abtriebsdrehmoment unter Berücksichtigung des Getriebewirkungsgrads.",
    "symbols": [
      [
        "M₂",
        "Abtriebsdrehmoment",
        "Nm"
      ],
      [
        "M₁",
        "Antriebsdrehmoment",
        "Nm"
      ],
      [
        "i",
        "Übersetzung",
        "–"
      ],
      [
        "η",
        "Getriebewirkungsgrad",
        "–"
      ]
    ],
    "tip": "Den Wirkungsgrad als Dezimalzahl einsetzen, zum Beispiel 0,95 statt 95 %.",
    "source": "Leistungsbilanz eines Getriebes",
    "updated": "07.10.2026"
  },
  {
    "id": "gesamtuebersetzung",
    "title": "Gesamtübersetzung",
    "category": "Getriebe",
    "formula": "i_{ges}=i_1\\cdot i_2\\cdot\\ldots\\cdot i_k",
    "explanation": "Bei mehreren Getriebestufen werden die einzelnen Übersetzungen multipliziert.",
    "symbols": [
      [
        "iges",
        "Gesamtübersetzung",
        "–"
      ],
      [
        "i₁ … iₖ",
        "Einzelübersetzungen",
        "–"
      ]
    ],
    "tip": "Die Übersetzungen werden multipliziert, nicht addiert.",
    "source": "Mehrstufiges Getriebe",
    "updated": "07.10.2026"
  },
  {
    "id": "zahnradmodul",
    "title": "Zahnradmodul",
    "category": "Getriebe",
    "formula": "m=\\frac{d}{z}",
    "explanation": "Der Modul beschreibt die Größe der Zähne eines Zahnrads.",
    "symbols": [
      [
        "m",
        "Modul",
        "mm"
      ],
      [
        "d",
        "Teilkreisdurchmesser",
        "mm"
      ],
      [
        "z",
        "Zähnezahl",
        "–"
      ]
    ],
    "tip": "Kämmende Zahnräder müssen denselben Modul besitzen.",
    "source": "Geometrie von Stirnrädern",
    "updated": "07.10.2026"
  },
  {
    "id": "ohmsches-gesetz",
    "title": "Ohmsches Gesetz",
    "category": "Elektrotechnik",
    "formula": "U=R\\cdot I",
    "explanation": "Beschreibt den Zusammenhang zwischen Spannung, Widerstand und Stromstärke.",
    "symbols": [
      [
        "U",
        "Spannung",
        "V"
      ],
      [
        "R",
        "Widerstand",
        "Ω"
      ],
      [
        "I",
        "Stromstärke",
        "A"
      ]
    ],
    "tip": "Umstellungen: I = U/R und R = U/I.",
    "source": "Ohmsches Gesetz",
    "updated": "07.10.2026"
  },
  {
    "id": "elektrische-leistung-dc",
    "title": "Elektrische Leistung bei Gleichstrom",
    "category": "Elektrotechnik",
    "formula": "P=U\\cdot I",
    "explanation": "Berechnet die elektrische Leistung bei Gleichspannung beziehungsweise rein ohmscher Last.",
    "symbols": [
      [
        "P",
        "elektrische Leistung",
        "W"
      ],
      [
        "U",
        "Spannung",
        "V"
      ],
      [
        "I",
        "Stromstärke",
        "A"
      ]
    ],
    "tip": "Mit dem Ohmschen Gesetz folgen auch P = I²·R und P = U²/R.",
    "source": "Elektrische Leistungsdefinition",
    "updated": "07.10.2026"
  },
  {
    "id": "drehstrom-wirkleistung",
    "title": "Wirkleistung im Drehstromnetz",
    "category": "Elektrotechnik",
    "formula": "P=\\sqrt{3}\\cdot U\\cdot I\\cdot\\cos(\\varphi)",
    "explanation": "Berechnet die Wirkleistung eines symmetrisch belasteten Drehstromsystems.",
    "symbols": [
      [
        "P",
        "Wirkleistung",
        "W"
      ],
      [
        "U",
        "Außenleiterspannung",
        "V"
      ],
      [
        "I",
        "Außenleiterstrom",
        "A"
      ],
      [
        "cos(φ)",
        "Leistungsfaktor",
        "–"
      ]
    ],
    "tip": "Für die aufgenommene Motorleistung gegebenenfalls zusätzlich den Wirkungsgrad berücksichtigen.",
    "source": "Drehstrom-Leistungsbeziehung",
    "updated": "07.10.2026"
  },
  {
    "id": "elektrische-arbeit",
    "title": "Elektrische Arbeit",
    "category": "Elektrotechnik",
    "formula": "W=P\\cdot t",
    "explanation": "Berechnet die umgesetzte elektrische Energie aus Leistung und Zeit.",
    "symbols": [
      [
        "W",
        "elektrische Arbeit/Energie",
        "Wh oder J"
      ],
      [
        "P",
        "Leistung",
        "W"
      ],
      [
        "t",
        "Zeit",
        "h oder s"
      ]
    ],
    "tip": "Einheiten konsistent wählen: W·h ergibt Wh, W·s ergibt Joule.",
    "source": "Energie-Leistungs-Beziehung",
    "updated": "07.10.2026"
  },
  {
    "id": "regeldifferenz",
    "title": "Regeldifferenz",
    "category": "Regelungstechnik",
    "formula": "e(t)=w(t)-x(t)",
    "explanation": "Die Regeldifferenz ist die Abweichung zwischen Sollwert und Istwert.",
    "symbols": [
      [
        "e(t)",
        "Regeldifferenz",
        "abhängig von Regelgröße"
      ],
      [
        "w(t)",
        "Sollwert/Führungsgröße",
        "abhängig von Regelgröße"
      ],
      [
        "x(t)",
        "Istwert/Regelgröße",
        "abhängig von Regelgröße"
      ]
    ],
    "tip": "Der Regler versucht, e(t) möglichst klein zu machen.",
    "source": "Grundbegriff des geschlossenen Regelkreises",
    "updated": "07.10.2026"
  },
  {
    "id": "p-regler",
    "title": "P-Regler",
    "category": "Regelungstechnik",
    "formula": "u(t)=K_P\\cdot e(t)",
    "explanation": "Die Stellgröße ist proportional zur momentanen Regeldifferenz.",
    "symbols": [
      [
        "u(t)",
        "Stellgröße",
        "abhängig vom System"
      ],
      [
        "Kₚ",
        "Proportionalverstärkung",
        "–"
      ],
      [
        "e(t)",
        "Regeldifferenz",
        "abhängig von Regelgröße"
      ]
    ],
    "tip": "Ein hoher Kₚ-Wert reagiert stärker, kann das System aber instabil oder schwingungsanfällig machen.",
    "source": "Grundform des P-Reglers",
    "updated": "07.10.2026"
  },
  {
    "id": "prozentwert",
    "title": "Prozentwert",
    "category": "Einheiten und Umrechnungen",
    "formula": "W=G\\cdot\\frac{p}{100}",
    "explanation": "Berechnet den Prozentwert aus Grundwert und Prozentsatz.",
    "symbols": [
      [
        "W",
        "Prozentwert",
        "abhängig von Aufgabe"
      ],
      [
        "G",
        "Grundwert",
        "abhängig von Aufgabe"
      ],
      [
        "p",
        "Prozentsatz",
        "%"
      ]
    ],
    "tip": "10 % entsprechen als Faktor 0,10.",
    "source": "Prozentrechnung",
    "updated": "07.10.2026"
  },
  {
    "id": "einheiten-drehzahl",
    "title": "Drehzahl in Frequenz umrechnen",
    "category": "Einheiten und Umrechnungen",
    "formula": "f=\\frac{n}{60}",
    "explanation": "Rechnet Umdrehungen pro Minute in Umdrehungen pro Sekunde beziehungsweise Hertz um.",
    "symbols": [
      [
        "f",
        "Frequenz",
        "Hz"
      ],
      [
        "n",
        "Drehzahl",
        "1/min"
      ]
    ],
    "tip": "3000 1/min entsprechen 50 1/s beziehungsweise 50 Hz.",
    "source": "Einheitenumrechnung",
    "updated": "07.10.2026"
  }
];
