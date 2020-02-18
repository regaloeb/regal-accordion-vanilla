<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Constructeur Vanilla Accordion</title>
		<meta name="description" content="regaloeb a fait un petit constructeur javascript vanilla pour les accordéons.">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
				
		<link href="css/styles.css" rel="stylesheet" type="text/css">
		
		<meta property="og:url" content="http://www.regaloeb.com/pages/regal-accordion-vanilla">
		<meta property="og:title" content="Constructeur Vanilla Accordion">
		<meta property="og:description" content="regaloeb a fait un petit constructeur javascript vanilla pour les accordéons.">
		<meta property="og:image" content="http://www.regaloeb.com/pages/regal-accordion-vanilla/fb-thumb.png">
		<meta property="og:site_name" content="regaloeb.com">
		<meta property="og:type" content="website">
		<meta property="fb:admins" content="595624305">
		<meta property="fb:app_id" content="217293022051519">
				
		<link rel="canonical" href="http://www.regaloeb.com/pages/regal-accordion-vanilla">
	</head>
	<body>		
		
		<main class="page-content">
			
			<section class="section">
				<div class="section-inner">
					<div class="page-section-title">
						<h1>RegalAccordion</h1>
					</div>
					<p>
						Parce que la présentation de contenus en accordéon revient régulièrement, autant faire un petit constructeur <strong>Javascript Vanilla</strong> qui va simplifier la tâche&nbsp;!<br><br>
						<a href="https://github.com/regaloeb/regal-accordion-vanilla" target="_blank" class="picto-link"><span class="picto"> <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</span><span>Github repository</span></a>
					</p>
					<h2>HTML</h2>
					<p>
						Conteneur principal avec classe <strong>.accordion</strong><br>
						Attribut <strong>data-default</strong> détermine l'état par défaut&nbsp;: "opened", les accordéons sont ouverts / "closed", ils sont fermés.<br>
						Attribut <strong>data-only-one</strong> détermine si on peut ouvrir plusieurs volets&nbsp;: "true", on ne peut pas! / "false" (ou pas d'attribut), on peut.<br>
						Chaque enfant de ce bloc .accordion est un volet et doit contenir&nbsp;:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;Un élément avec classe <strong>.open-close</strong><br>
						&nbsp;&nbsp;&nbsp;&nbsp;Un élément avec classe <strong>.accordion-desc</strong> qui doit contenir un élément avec classe <strong>.desc-cont</strong> (pour le calcul de la hauteur)
						<div class="code">
&lt;ul <strong>class="accordion" data-default="closed" data-only-one="true"</strong>><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2 <strong>class="open-close"</strong>>&lt;span class="title">Labore explicari temporibus ut nam, qui in solet eruditi gloriatur.&lt;/span>&lt;span class="picto">&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22">&lt;path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/>&lt;/svg>&lt;/span>&lt;/h2><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="accordion-desc"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="desc-cont"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p>Ex est mundi ridens utamur etc.&lt;/p><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br>
&nbsp;&nbsp;&nbsp;&nbsp;etc.<br>
&lt;/ul><br>				
						</div>
					</p>
					<h2>CSS</h2>
					<p>
						Le seul pré-requis concerne l'élément <stronG>.desc</strong>&nbsp;:
						<div class="code">
						overflow: hidden;<br>
						transition: max-height $speed1 $defaultEase;
						</div>
						Le reste, c'est de l'habillage&nbsp;: <a href="scss/common/_accordion.scss" target="_blank">scss/common/_accordion.scss</a>
					</p>
					<h2>Javascript</h2>
					<p>
						Inclure le constructeur Vanilla <a href="js/regal-accordion-vanilla.min.js" target="_blank">regal-accordion-vanilla.min.js</a> (2.23Ko)<br>
						Version non minifiée&nbsp;: <a href="js/regal-accordion-vanilla.js" target="_blank">regal-accordion-vanilla.js</a>
						<div class="code">
						&lt;script src="js/regal-accordion-vanilla.min.js">&lt;/script>
						</div>
						
						<h3>Déclarer les accordéons&nbsp;:</h3>
						<div class="code">
var accordions = document.querySelectorAll('.accordion');<br>
if(accordions){<br>
&nbsp;&nbsp;&nbsp;&nbsp;accordions.forEach(function(elt){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>elt.acc</strong> = new RegalAccordion(elt);<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}<br>
						</div>
						Je stocke l'objet RegalAccordion dans l'élément HTML lui-même (elt.acc) de façon à pouvoir en appeler facilement les méthodes publiques.
						<br><br>
						<h3>Méthodes publiques&nbsp;:</h3><br>
						Pour détruire l'accordéon.
						<span class="code">elt.acc.destroy()</span><br>
						Pour updater la hauteur de l'accordéon si jamais son contenu change.
						<span class="code">elt.acc.slideDown()</span><br>
						Et voilà&nbsp;!
					</p>
					<h2>Démos</h2>
					<p style="margin-top:2rem; margin-bottom:0;">
						<strong>Un accordéon fermé par défaut, avec 1 seul volet ouvert à la fois&nbsp;:</strong>
					</p>
					<ul class="accordion" data-default="closed" data-only-one="true">
						<li>
							<h2 class="open-close"><span class="title">Labore explicari temporibus ut nam, qui in solet eruditi gloriatur.</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>Ex est mundi ridens utamur, vel equidem volumus eu, nec ne putant commodo necessitatibus. Mutat euripidis est cu, ad usu veniam option accusata. Ut ipsum virtute numquam mei, mei suas adipisci ne. Sit stet molestie in, prima nemore et duo. Eum wisi porro similique ne, eum ea modus aperiam. Ea dico iriure aliquando cum, mel prima platonem dissentias at, sit te vocent facilisi deserunt. Cu omnes facilisi prodesset mei.</p>
									<p>Scripta consectetuer vim no, alia hendrerit ullamcorper et vim. Et mel vide noster facete, eius nullam volutpat vim et, no laoreet epicurei consectetuer duo. Ea lorem dolore nec, et vel nihil dolores dignissim. Vim ei illud lorem assentior, te latine mentitum explicari quo. Pri accusam assueverit no. No enim detraxit patrioque his, eum solet tamquam iudicabit ad.</p>
								</div>
							</div>
						</li>
						<li>
							<h2 class="open-close"><span class="title">Ex est mundi ridens utamur, vel equidem volumus eu</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux-glabre.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>His in novum corrumpit. Ei cetero assueverit usu. In duis discere fabulas duo, an everti commodo ius. Scaevola argumentum in duo. Vocent fastidii reprimique his id, ex usu nullam timeam molestie, affert similique cu his.</p>
									<p>Duo no assum reprehendunt, dolore aliquam ad cum. Ut causae democritum efficiantur qui, ius at nisl probo legendos, atqui apeirian argumentum in vix. Alia debet explicari in qui. Illum maiorum tibique ut est. Duo id errem primis vocibus, cu cum dicant dignissim liberavisse. Tota efficiendi eu his, te dicit patrioque sit.</p>
									<p>Ea ubique impedit vis, mel at etiam iusto nonumy. Omnis tation rationibus pri id. Duo modo lorem mazim et, cu duo case voluptatum, sale epicurei ea eam. Ad quem modo choro ius, qui ei fuisset mandamus accommodare, verear apeirian suscipiantur quo te. Rebum numquam facilis ea sea, no pro mundi homero evertitur. Mei laudem causae indoctum ex. Ad vix enim ancillae, vix veniam impetus torquatos ut, veniam fabulas ex sed.</p>
								</div>
							</div>
						</li>
					</ul>
					
					<p style="margin-top:2rem; margin-bottom:0;">
						<strong>Un accordéon avec un élément ouvert par défaut&nbsp;:</strong>
					</p>
					<ul class="accordion" data-default="closed" data-only-one="false">
						<li>
							<h2 class="open-close"><span class="title">Labore explicari temporibus ut nam, qui in solet eruditi gloriatur.</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux-glabre.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>Ex est mundi ridens utamur, vel equidem volumus eu, nec ne putant commodo necessitatibus. Mutat euripidis est cu, ad usu veniam option accusata. Ut ipsum virtute numquam mei, mei suas adipisci ne. Sit stet molestie in, prima nemore et duo. Eum wisi porro similique ne, eum ea modus aperiam. Ea dico iriure aliquando cum, mel prima platonem dissentias at, sit te vocent facilisi deserunt. Cu omnes facilisi prodesset mei.</p>
									<p>Homero munere nemore an per, ius ei nibh ullum consetetur, ut nam agam intellegat. Nibh adversarium duo ne, errem semper legendos at qui. Eu vel copiosae percipit explicari. Inani omnes euripidis ne sea, mazim accusam concludaturque nec ut. Eam eu nihil accusamus. At vim propriae suscipiantur, quodsi adipisci est ad.
									</p>
								</div>
							</div>
						</li>
						<li>
							<h2 class="open-close" data-default="open"><span class="title">Ex est mundi ridens utamur, vel equidem volumus eu</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>His in novum corrumpit. Ei cetero assueverit usu. In duis discere fabulas duo, an everti commodo ius. Scaevola argumentum in duo. Vocent fastidii reprimique his id, ex usu nullam timeam molestie, affert similique cu his.</p>
									<p>Duo no assum reprehendunt, dolore aliquam ad cum. Ut causae democritum efficiantur qui, ius at nisl probo legendos, atqui apeirian argumentum in vix. Alia debet explicari in qui. Illum maiorum tibique ut est. Duo id errem primis vocibus, cu cum dicant dignissim liberavisse. Tota efficiendi eu his, te dicit patrioque sit.</p>
									<p>Ut vel labores platonem, eos cetero inciderint signiferumque eu. Quis quaeque dissentias quo an, quo no invenire atomorum intellegam. In ius justo apeirian, qui no choro nominati, id ignota audiam interpretaris duo. Vim stet repudiandae disputationi et, copiosae evertitur adipiscing ex qui, ipsum aeque congue ad est. Id usu meis consequat urbanitas, duis fuisset ullamcorper usu no, persius mediocrem ei est.</p>
								</div>
							</div>
						</li>
						<li>
							<h2 class="open-close"><span class="title">Labore explicari temporibus ut nam, qui in solet eruditi gloriatur.</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux-glabre.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>Ex est mundi ridens utamur, vel equidem volumus eu, nec ne putant commodo necessitatibus. Mutat euripidis est cu, ad usu veniam option accusata. Ut ipsum virtute numquam mei, mei suas adipisci ne. Sit stet molestie in, prima nemore et duo. Eum wisi porro similique ne, eum ea modus aperiam. Ea dico iriure aliquando cum, mel prima platonem dissentias at, sit te vocent facilisi deserunt. Cu omnes facilisi prodesset mei.</p>
									<p>Detracto recusabo mea ea, mei errem altera noster no. Duo alienum sensibus vituperatoribus ut, vim cu tation ignota posidonium, sed reque eirmod albucius ei. Mel quodsi voluptatum te, te pro ornatus gloriatur, ad ius postea splendide. Eu per sint iudico, dolorum delicata sit ex.</p>
								</div>
							</div>
						</li>
					</ul>
					
					<p style="margin-top:2rem; margin-bottom:0;">
						<strong>Un accordéon ouvert par défaut&nbsp;:</strong>
					</p>
					<ul class="accordion" data-default="opened">
						<li>
							<h2 class="open-close"><span class="title">Ne dolore scripta verterem sea, ex altera tincidunt quo</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux-glabre.jpg" alt="une image" style="float:left; margin-right: 2rem; margin-bottom: 0;">
									<p>
										Lorem ipsum dolor sit amet, an sea ancillae scriptorem, usu consul utroque ad, ne dicat tibique recteque vim. Mei munere debitis ei, ut viris mentitum mei, an nam dicat possit detracto. In corpora blandit his. Utamur conclusionemque an eam. Nec id nullam iriure partiendo. Cu diam expetendis ius, nam exerci munere partiendo ut.
									</p>
								</div>
							</div>
						</li>
						<li>
							<h2 class="open-close"><span class="title">Sonet possit placerat no has</span><span class="picto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21" width="12" height="22"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M.5 1l10.504 9.629L.5 20.112"/></svg></span></h2>
							<div class="accordion-desc">
								<div class="desc-cont">
									<img src="img/photo-sourire-vieux.jpg" alt="une image" style="float:left; margin-right: 2rem;">
									<p>
										Lorem ipsum dolor sit amet, mei id mutat zril timeam. Eu duo constituam scripserit. No unum timeam nec, in vim tale nihil delectus, no movet omnes forensibus sea. Quidam delenit appetere in mel, vis ei nulla recusabo contentiones. Id est euismod abhorreant.<br>
										Eu usu gubergren necessitatibus, at duo wisi disputationi, eu noluisse liberavisse eum. Vis id aeque soluta maluisset, vim stet veniam mnesarchum no. Qui at dolore perfecto vituperata, ne detracto assueverit sea, sea id petentium abhorreant. Has ei persecuti ullamcorper, perpetua rationibus no mea. At atqui deseruisse sit, eum no brute prodesset. Vel id erat audiam, vocibus fastidii ut vel, discere menandri mei ad.<br>
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			
		</main>
		
		<script src="js/regal-accordion-vanilla.js"></script>
		<script src="js/general.js"></script>
	</body>
</html>