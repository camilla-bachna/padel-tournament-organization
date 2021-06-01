# Organización de torneos de pádel :tennis:

![Welcome](/web/src/images/padel_welcome.png)

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

### Landing:

![Landing](/web/src/images/landing.png)

En la página de bienvenida hay dos botónes. El usuario puede elegir entre crear un nuevo pozo, pulsando el botón "Crea un nuevo pozo" o unirse a un pozo pulsando el botón "Únete a un pozo".

### Crea un nuevo pozo:

![Create new tournament](/web/src/images/create_tournament.png)

Aqui va a recibir un pin que el resto de jugadores puede usar para apuntarse. También tendrá que añadir las pistas que haya reservado.

### Login - A jugar:

Si el usuario ha pulsado "Únete a un pozo" verá la siguiente página:

![Login](/web/src/images/login.png)

El botón "A jugar" permite hacer login a otros jugadores que tengan un pin de partido. Para ellos deben escribir un nombre de usuario y añadir el pin del pozo. Además para los pozos mixtos deben elegir el género. Así de fácil pueden unirse al pozo.

### Área personal:

![Profile](/web/src/images/profile.png)

Pulsando el botón "A jugar" los usuarios serán redirigidos a su área personal, donde tienen que seleccionar si han ganado o perdido la partida.

### Pozos

Al hacer clic en el botón "A jugar" los jugadores serán redirigidos a su perfil y solo tienen que indicar si han ganado o perdido la partida. Dependiendo del resultado del partido se les indicará que vayan a una u otra pista.

### Base de datos:

Trabajo en curso. Pronto tendréis la funcionalidad completa!

> **NOTA:** Si tienes alguna sugerencia o mejora: son siempre bienvenidas!

## Contacto 🖋

Si te gusta este trabajo, no dudes en **ponerte en contacto conmigo**. Pincha en los enlaces para acceder a:

- [mi cuenta de LinkedIn](https://www.linkedin.com/in/camilla-bachna)
- [mi perfil de GitHub](https://github.com/camilla-bachna)

