# Organización de torneos de pádel :tennis:

![Welcome](/src/images/padel_welcome.png)

La aplicación permite organizar pozos de pádel; está diseñada para ayudar a encontrar la pista correcta en un pozo de pádel y en general hacer más fácil los preparativos del torneo.

## Cómo lo he creado:

He usado **React** para realizarlo así como HTML CSS y JavaScript y instalado

- npm install --save react-router-dom (router)

- npm install node-sass (Sass)

- npm install cors (cors)

- npm install express (express)

- npm install better-sqlite3 (SQL)

## Descárgate el repositorio:

- Descarga el [respositorio](https://github.com/camilla-bachna/padel-tournament-organization) de GitHub.
- Abre un terminal e instala las dependencias locales ejecutando en la terminal el comando:

```bash
npm install
```

- Por último arranca el proyecto ejecutando el comando:

```bash
npm start
```

Se abrirá una ventana del explorador y ya podrás usar la aplicación.

## Descripción:

## Las distintas partes de la aplicación son:

![Welcome](/src/images/welcome.png)

### Crea un nuevo pozo:

![Create new tournament](/src/images/create_tournament.png)

El usuario puede pulsar en el botón "Crea un nuevo pozo". Así va a recibir un pin que el resto de jugadores puede usar para apuntarse. También tendrá que añadir las pistas que haya reservado.

### Login - A jugar:

![Profile](/src/images/profile.png)

En la página de bienvenida tiene otro botón "A jugar" que permite hacer login a otros jugadores que tengan un pin de partido. Para ellos deben escribir un nombre de usuario y añadir el pin del pozo. Además para los pozos mixtos deben elegir el género. Así de fácil pueden unirse al pozo.

### Pozos

Al hacer clic en el botón "A jugar" los jugadores serán redirigidos a su perfil y solo tienen que indicar si han ganado o perdido la partida. Dependiendo del resultado del partido se les indicará que vayan a una u otra pista.

### Base de datos:

Trabajo en curso. Pronto tendréis la funcionalidad completa!

> **NOTA:** Si tienes alguna sugerencia o mejora: son siempre bienvenidas!

## Contacto 🖋

Si te gusta este trabajo, no dudes en **ponerte en contacto conmigo**. Pincha en los enlaches para acceder a:

- [mi cuenta de LinkedIn](https://www.linkedin.com/in/camilla-bachna)
- [mi perfil de GitHub](https://github.com/camilla-bachna)

## Visita la página 💻:

Y por último, para ver la página, pincha en el siguiente enlace: [Padel paradise](https://camilla-bachna.github.io/padel-tournament-organization/#/ 'Padel paradise').
