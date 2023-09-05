<script>
    import { Card } from 'flowbite-svelte';
    import { Icon } from 'flowbite-svelte-icons';
    import { base } from '$app/paths';
</script>
  
<h2>Über mich</h2>
<p>
    Meine Passion gilt der kontinuierlichen Optimierung von Quellcode.
    Jedes Stück Code ist eine neue Chance etwas zu optimieren.
    Ich genieße den Prozess, ineffiziente Teile zu identifizieren, Redundanzen zu beseitigen und die Lesbarkeit zu erhöhen.
    Diese Leidenschaft treibt mich an, ständig dazuzulernen und meine Fähigkeiten zu schärfen, um letztendlich nicht nur funktionierenden, sondern auch eleganten Code zu erschaffen.
</p>

<h2>Technische Fähigkeiten</h2>
<p>Folgend eine kleine Auflistung mit Programmiersprachen, Frameworks, Tools und Technologien, in denen ich beruflich oder privat Erfahrung gesammelt habe.</p>

<div class="grid grid-cols-2 gap-4">
    <div>
        <h3>Programmier- und Skriptingsprachen</h3>
        <ul class="my-5 space-y-4">
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">PHP</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">C#</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">HTML/CSS</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">JavaScript/Extendscript</span>
            </li>
        </ul>
    </div>
    <div>
        <h3>Frameworks, Tools und Technologien</h3>
        <ul class="my-5 space-y-4">
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">Contentserv (bspw. Flex-Tabellen, etliche Plugins und CSTypes)</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">InDesign inkl. priint:comet</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">Twig (Symfony)</span>
            </li>
            <li class="flex space-x-2">
                <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
                <span class="text-base font-normal leading-tight text-gray-500">Svelte.Kit mit Flowbite/Tailwind</span>
            </li>
        </ul>
    </div>
</div>

<h2>Projekte</h2>
<ul class="my-5 space-y-4">
    <li class="flex space-x-2">
        <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
        <span class="text-base font-normal leading-tight text-gray-500">
            Hauptentwickler in etlichen Contentserv Projekten.
            Dies reicht von der Konzeption bis hin zur Umsetzung von mehrsprachigen Katalogen, Preiselisten, Datenblättern, Etiketten, ...
        </span>
    </li>
    <li class="flex space-x-2">
        <Icon name="check-circle-solid" class="w-4 h-4 text-primary-600" />
        <span class="text-base font-normal leading-tight text-gray-500">Hauptentwickler einiger abteilungsinterner Module, die das Leben sowohl der Kunden als auch der Entwickler erleichtern sollen.</span>
    </li>
</ul>

<h2>Hobbys</h2>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <Card img="{base}/hobbies/bouldern.png" class="mb-4">
        <h5 class="mb-2 text-2xl font-bolder tracking-tight text-gray-900">Bouldern</h5>
        <p class="mb-3 font-normal text-gray-500 leading-tight">
            Seit einem Jahr habe ich mein Interesse für das Bouldern entdeckt, durch die Einladung meines Freundes.
            Die körperliche Herausforderung und das Lösen von Routen faszinieren mich.
            Jeder Fortschritt spornt mich an, mit voller Begeisterung weiterzumachen.
        </p>
    </Card>
    <Card img="{base}/hobbies/ti.png" class="mb-4">
        <h5 class="mb-2 text-2xl font-bolder tracking-tight text-gray-900">Brettspiele</h5>
        <p class="mb-3 font-normal text-gray-500 leading-tight">
            In der Welt der Brettspiele liebe ich besonders 18XX, Eclipse Second Dawn und vor allem Twilight Imperium.
            Letzteres begeistert mich nicht nur durch seine strategische Tiefe, sondern auch durch das einzigartige zwischenmenschliche Element.
            Twilight Imperium geht über das bloße Spielen hinaus – hier zählen diplomatische Verhandlungen, Allianzen und das Knüpfen von Beziehungen zu den Mitspielern genauso viel wie das Spielgeschehen selbst.
        </p>
    </Card>
    <Card img="{base}/hobbies/nature.png" class="mb-4">
        <h5 class="mb-2 text-2xl font-bolder tracking-tight text-gray-900">Wandern</h5>
        <p class="mb-3 font-normal text-gray-500 leading-tight">
            Die Natur beim Wandern zu erleben, ist für mich pure Erholung.
            Die Wege bringen mich zur Ruhe und die Geräusche der Umgebung sind wie ein natürlicher Soundtrack.
            Die gemeinsamen Erlebnisse mit Freunden oder Familie verstärken das Gefühl von Verbundenheit mit der Natur und bringen uns ein Stück näher zusammen.
        </p>
    </Card>
    <Card img="{base}/hobbies/chess.png" class="mb-4">
        <h5 class="mb-2 text-2xl font-bolder tracking-tight text-gray-900">Schach</h5>
        <p class="mb-3 font-normal text-gray-500 leading-tight">
            Auch wenn das an sich auch unter Brettspiele fällt...
            Die Welt des Schachs übt eine faszinierende Anziehungskraft auf mich aus.
            Beim Spiel mit den weißen Figuren reizen mich vor allem das katalanische Repertoire und die Wiener Variante.
            Auch als Schwarzspieler finde ich Gefallen an der soliden Struktur der Caro-Kann Verteidigung.
            In jeder Partie entdecke ich neue Möglichkeiten, um mein Spiel zu perfektionieren.
        </p>
    </Card>
</div>

<style>
h2 {
    counter-increment: h2;
    display: list-item;
    margin: 1.25rem;
    color: theme('colors.primary.700');
}

h2::marker {
    display: list-item;
    content: "#" counter(h2) " ";
    color: theme('colors.primary.400');
    font-weight: bold;
}

body {
  counter-reset: h2;
}

li {
    margin-left: 1rem;
}
</style>