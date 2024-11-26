import familyBudgetImage from '@/assets/images/familyBudget.png';
import aerialImage from '@/assets/images/aerial.png';
import promptopiaImage from '@/assets/images/promptopia.png';
import starTourImage from '@/assets/images/starTour_1.png';
import landareaImage from '@/assets/images/landarea.png';
import movieFinderImage from '@/assets/images/movie.png';

export const portfolioProjects = [
	{
		id: 1,
		company: 'aerialpaysbasque',
		year: '2024',
		title: 'Site: cours de cerceau aérien',
		results: [{ title: 'React' }, { title: 'Tailwind' }],
		webSite: 'https://aerialpaysbasque.com/',
		image: aerialImage,
		projetPerso: false,
		description: `
			<p class="text-base text-white/80 mb-6">
			Développement complet d'un site vitrine moderne pour Aerial Pays Basque, une école de cerceau aérien basée à Bayonne & Biarritz. Ce projet client a nécessité une approche centrée sur l'expérience utilisateur pour mettre en valeur une discipline artistique unique.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Points clés du développement :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture React optimisée pour des performances maximales
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Design responsive et animations fluides avec Tailwind CSS
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Optimisation SEO pour une visibilité locale accrue
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Intégration d'une galerie photos/vidéos performante
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de navigation intuitif et ergonomique
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Défis techniques relevés :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Création d'animations personnalisées pour refléter la fluidité des mouvements aériens
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Optimisation des images pour maintenir un temps de chargement rapide
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Mise en place d'un système de routing efficace pour une navigation fluide
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Le site a permis d'augmenter significativement la visibilité de l'école et d'améliorer l'acquisition de nouveaux élèves grâce à une présentation professionnelle et une expérience utilisateur soignée.
			</p>`,
	},
	{
		id: 2,
		company: 'family budget',
		year: '2024',
		title: 'APP: gestion de budget',
		results: [{ title: 'React' }, { title: 'Tailwind' }, { title: 'Firebase' }],
		webSite: 'https://www.familiybudget.com/',
		image: familyBudgetImage,
		projetPerso: false,
		description: `
			<p class="text-base text-white/80 mb-6">
			Développement d'une application web complète de gestion de budget familial, permettant aux utilisateurs de suivre leurs dépenses, revenus et épargnes en temps réel. Cette solution moderne et intuitive facilite la planification financière au quotidien.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Points clés du développement :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface utilisateur intuitive développée avec React
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Design moderne et responsive avec Tailwind CSS
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Base de données temps réel avec Firebase
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système d'authentification sécurisé
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Visualisation des données avec des graphiques interactifs
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Défis techniques relevés :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Mise en place d'un système de catégorisation automatique des dépenses
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Développement de fonctionnalités de calcul en temps réel
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Implémentation d'un système d'export de données
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Gestion optimisée des états.
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Cette application permet aux familles de mieux gérer leur budget grâce à des fonctionnalités intuitives et une visualisation claire de leurs finances, contribuant ainsi à une meilleure santé financière au quotidien.
			</p>`,
	},
	{
		id: 3,
		company: 'promptopia',
		year: '2023',
		title: "Site: partage de prompts d'IA",
		results: [{ title: 'NextJS' }, { title: 'MongoDB' }, { title: 'Tailwind' }],
		webSite: 'https://promptopia-zeta-sage.vercel.app/',
		image: promptopiaImage,
		projetPerso: true,
		description: `
			<p class="text-base text-white/80 mb-6">
			Développement d'une plateforme innovante de partage de prompts d'IA, permettant aux utilisateurs de créer, partager et découvrir des prompts optimisés pour ChatGPT et d'autres modèles d'IA. Cette application full-stack offre une expérience utilisateur moderne et intuitive.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Fonctionnalités clés développées :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Authentification sécurisée avec Google OAuth 2.0
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				CRUD complet pour la gestion des prompts
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de recherche avancé par mot-clé, tag ou utilisateur
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Profils utilisateurs personnalisés
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface responsive et intuitive
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Stack technique :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Next.js 13 avec App Router pour un rendu hybride optimisé
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				MongoDB et Mongoose pour une gestion efficace des données
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Tailwind CSS pour un design moderne et responsive
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Next-Auth pour une authentification robuste
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Défis techniques relevés :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Implémentation d'un système de cache intelligent pour optimiser les performances
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Gestion optimisée des états avec une architecture de données complexe
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Mise en place d'une recherche performante avec indexation MongoDB
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Déploiement et configuration sur Vercel avec variables d'environnement sécurisées
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Ce projet personnel démontre ma maîtrise des technologies modernes du web et ma capacité à concevoir des applications full-stack complexes. L'architecture évolutive permet d'accueillir une base d'utilisateurs croissante tout en maintenant des performances optimales.
			</p>`,
	},
	{
		id: 4,
		company: 'star tour agency',
		year: '2022',
		title: 'Site : agence de voyage spatial',
		results: [{ title: 'React' }, { title: 'Tailwind' }, { title: 'API' }],
		webSite: 'https://star-tour-agency.vercel.app/',
		image: starTourImage,
		projetPerso: true,
		description: `
			<p class="text-base text-white/80 mb-6">
			Conception et développement d'une application web immersive simulant une agence de voyages spatiaux, dans le cadre de mes études. Ce projet créatif combine design futuriste et fonctionnalités interactives pour offrir une expérience utilisateur unique dans l'exploration spatiale virtuelle.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Fonctionnalités innovantes :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Catalogue interactif de destinations spatiales avec visualisation 3D
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de réservation de voyages spatiaux avec sélection de dates
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Intégration d'APIs NASA pour données astronomiques réelles
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Animations et transitions fluides pour une navigation immersive
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface adaptative avec thème spatial personnalisé
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Aspects techniques :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture React avec gestion d'état optimisée
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Intégration et manipulation d'APIs externes
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Styling avancé avec Tailwind CSS
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Optimisation des performances avec lazy loading et code splitting
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Défis créatifs relevés :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Création d'une expérience utilisateur futuriste et immersive
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Développement d'animations personnalisées pour les transitions
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Intégration harmonieuse des données astronomiques réelles
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Design responsive maintenant l'aspect futuriste sur tous les écrans
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Ce projet d'étude démontre ma capacité à créer des interfaces utilisateur innovantes et immersives, tout en maintenant une architecture technique solide. Il illustre parfaitement la fusion entre créativité design et expertise technique dans le développement web moderne.
			</p>`,
	},
	{
		id: 5,
		company: 'landarea',
		year: '2022',
		title: 'App : vente de plantes',
		results: [
			{ title: 'React' },
			{ title: 'SASS' },
			{ title: '📱 MOBILE FIRST APP' },
		],
		webSite: 'https://landarea.vercel.app/',
		image: landareaImage,
		projetPerso: true,
		description: `
			<p class="text-base text-white/80 mb-6">
			Création d'une "mini" boutique en ligne dédiée à la vente de plantes, développée avec une approche Mobile First. Cette application e-commerce, rélisée dans le cadre d'un HACKATHON lors de mes études, allie esthétique épurée et expérience utilisateur optimisée pour les appareils mobiles.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Caractéristiques principales :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface Mobile First avec adaptation desktop fluide
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Catalogue de produits avec filtres dynamiques
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Panier d'achat interactif avec gestion d'état
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Fiches produits détaillées avec conseils d'entretien
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de recherche et de filtrage avancé
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Aspects techniques :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture React optimisée pour les performances mobiles
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Utilisation avancée de SASS avec architecture 7-1
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Gestion d'état optimisée pour le panier et les filtres
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Animations fluides adaptées aux performances mobiles
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Points forts Mobile First :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Navigation tactile optimisée avec gestes intuitifs
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Temps de chargement optimisés pour réseaux mobiles
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface adaptative privilégiant l'expérience mobile
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Composants UI spécialement conçus pour écrans tactiles
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Optimisations techniques :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Utilisation de mixins SASS pour la réutilisabilité du code
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Lazy loading des images pour performances optimales
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture modulaire pour une maintenance facilitée
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Tests de compatibilité cross-device approfondis
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Ce projet met en avant ma maîtrise de l'approche Mobile First et des bonnes pratiques de développement web moderne. L'attention particulière portée à l'expérience mobile tout en maintenant une expérience desktop de qualité démontre ma capacité à créer des applications web responsive et performantes.
			</p>`,
	},
	{
		id: 6,
		company: 'find the movie',
		year: '2021',
		title: 'Site : bibliothèque de films',
		results: [{ title: 'React' }, { title: 'SASS' }, { title: 'API' }],
		webSite: 'https://findthemovie.vercel.app/',
		image: movieFinderImage,
		projetPerso: true,
		description: `
			<p class="text-base text-white/80 mb-6">
			Développement d'une application web dynamique de recherche et découverte de films, exploitant l'API TMDB (The Movie Database). Cette plateforme permet aux utilisateurs d'explorer, rechercher et découvrir des films avec une interface intuitive et moderne.
			</p>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Fonctionnalités principales :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Recherche en temps réel avec suggestions dynamiques
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Filtrage avancé par genre, année, et popularité
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Fiches détaillées des films avec casting et recommandations
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de notation et d'avis intégré
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Liste de films à voir personnalisable
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Intégration technique :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Intégration complète de l'API TMDB avec gestion du cache
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture React avec hooks personnalisés
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Styling modulaire avec SASS et architecture BEM
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Gestion optimisée des requêtes API avec debouncing
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Optimisations UX/UI :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Interface utilisateur fluide avec retours visuels
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Système de pagination infinie pour le browsing
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				États de chargement et gestion d'erreurs élégants
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Design responsive avec grille dynamique
				</li>
			</ul>
			</div>

			<div class="mb-6">
			<h4 class="text-emerald-300 font-semibold mb-6">Défis techniques relevés :</h4>
			<ul class="space-y-2 text-white/70">
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Optimisation des performances avec lazy loading
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Gestion efficace du cache pour réduire les appels API
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Implémentation d'une recherche performante
				</li>
				<li class="flex items-start gap-2">
				<span class="text-emerald-300/80">•</span>
				Architecture SASS évolutive et maintenable
				</li>
			</ul>
			</div>

			<p class="text-base text-white/80">
			Ce projet démontre ma capacité à créer une application web complexe intégrant des API externes, avec une attention particulière portée à l'expérience utilisateur et aux performances. L'utilisation de React combinée à une architecture SASS robuste permet une maintenance facile et une évolution fluide du projet.
			</p>`,
	},
];
