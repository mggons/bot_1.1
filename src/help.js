const help = (prefix) => {
	return `
┏━━❉ *Acerca del BOT* ❉━━━┓
┣⊱ _*Nombre*_ : Soporte y Aportes BOT
┣⊱ *Grupo WP* : https://tinyurl.com/syagroup
┣⊱ *Grupo TG* : https://t.me/soporteyapps
┣⊱ *Creador* : JDMTECH
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

┏━━❉ *Comandos Disponibles* ❉━━━┓
┣⊱ *Comandos de Administrador y Usuario* 
┣⊱ ===============================
┣⊱ ${prefix}admincreator -> Admin
┣⊱ ${prefix}blocklist -> Lista bloqueados
┣⊱ ${prefix}setprefix -> Cambia el codigo inicial del grupo
┣⊱ ${prefix}welcome -> Bienvenida para grupos en general
┣⊱ ${prefix}welcomusic -> Bienvenida para grupos de musica
┣⊱ ${prefix}listadmins -> Enlista de admins del grupo 
┣⊱ ${prefix}linkgroup -> link del grupo
┣⊱ ${prefix}promote -> Promueve a administrador (solo admins)
┣⊱ ${prefix}demote -> Degarda de admin a user (solo admins)
┣⊱ ${prefix}tagall -> Enlista a todos con etiqueta 
┣⊱ ${prefix}gb -> Mensaje Global medio de difusion (solo admins)
┣⊱ ${prefix}add -> Añade numeros al grupo (solo admins)
┣⊱ ${prefix}kick -> Elimina a usuario del grupo (solo admins)
┣⊱ ${prefix} Proximamente mas comandos
┣⊱ ===============================
┣⊱     *Conversion de Imagenes*
┣⊱ ===============================
┣⊱ ${prefix}ocr -> Convertir imagen a ocr
┣⊱ ${prefix}toimg -> Convierte un sticker a imagen
┣⊱ ${prefix}stiker -> Convierte imagen a sticker
┣⊱ ===============================
┣⊱ 	*Comandos de Musica*
┣⊱ ===============================
┣⊱ ${prefix}ytbuscar -> Busca en youtube 
┣⊱ ${prefix}mp3 -> Sacar pista de audio de Youtube
┣⊱ ${prefix}mp4 -> Sacar video de Youtube
┣⊱ ================================
┣⊱ 	     *Texto a Voz*
┣⊱ ================================
┣⊱ ${prefix}tts -> Permite pasar de texto a Voz
┣⊱ ================================
┣⊱ 	 *Verficador de Links*
┣⊱ ================================
┣⊱ ${prefix}mediafire -> Busca el contenido del link de mediafare
┣⊱ ================================
┣⊱  Proximamente mas comandos
┣⊱ ${prefix} 
┣⊱ ${prefix} 
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
}

exports.help = help
