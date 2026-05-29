const admin = require('firebase-admin');

const serviceAccount = require('./fitapp-e9699-firebase-adminsdk-fbsvc-415612911f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function deleteCollection(collectionPath) {
  const snapshot = await db.collection(collectionPath).get();
  const batch = db.batch();

  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  await batch.commit();
  console.log(`🗑️ Colección '${collectionPath}' eliminada`);
}

async function seedDatabase() {
  try {
    console.log('🚀 Iniciando carga de datos...');

    // Eliminar datos viejos
    console.log('🗑️ Limpiando base de datos...');
    await deleteCollection('sportCenters');
    await deleteCollection('classes');

    // ===== CENTROS DEPORTIVOS =====
    const sportCenters = [
      {
        name: 'Fitness Park Barcelona',
        address: 'Paseo de Gracia 50, Barcelona',
        city: 'Barcelona',
        phone: '+34 93 123 4567',
        image: 'https://via.placeholder.com/300x200?text=Fitness+Park',
        students: 250,
      },
      {
        name: 'CrossFit Hub Sants',
        address: 'Carrer de Sants 100, Barcelona',
        city: 'Barcelona',
        phone: '+34 93 234 5678',
        image: 'https://via.placeholder.com/300x200?text=CrossFit+Hub',
        students: 180,
      },
      {
        name: 'Yoga Studio Eixample',
        address: 'Paseo Sant Joan 200, Barcelona',
        city: 'Barcelona',
        phone: '+34 93 345 6789',
        image: 'https://via.placeholder.com/300x200?text=Yoga+Studio',
        students: 120,
      },
    ];

    console.log('📍 Cargando centros deportivos...');
    for (const center of sportCenters) {
      await db.collection('sportCenters').add({
        ...center,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log(`✅ ${sportCenters.length} centros cargados`);

    // ===== CLASES =====
    const classes = [
      // Fitness Park Barcelona
      {
        name: 'Conditioning',
        date: '2026-05-29',
        time: '07:00',
        instructor: 'Carlos López',
        capacity: 20,
        students: 15,
        duration: 45,
        level: 'Intermedio',
        sportCenterName: 'Fitness Park Barcelona',
      },
      {
        name: 'Conditioning',
        date: '2026-05-29',
        time: '09:00',
        instructor: 'Ana Martínez',
        capacity: 20,
        students: 18,
        duration: 45,
        level: 'Intermedio',
        sportCenterName: 'Fitness Park Barcelona',
      },
      {
        name: 'Conditioning',
        date: '2026-05-29',
        time: '17:00',
        instructor: 'Diego Ruiz',
        capacity: 20,
        students: 12,
        duration: 45,
        level: 'Intermedio',
        sportCenterName: 'Fitness Park Barcelona',
      },
      {
        name: 'Strength',
        date: '2026-05-29',
        time: '19:00',
        instructor: 'Laura Fernández',
        capacity: 18,
        students: 16,
        duration: 50,
        level: 'Avanzado',
        sportCenterName: 'Fitness Park Barcelona',
      },

      // CrossFit Hub Sants
      {
        name: 'Crossfit',
        date: '2026-05-29',
        time: '06:00',
        instructor: 'Miguel Sánchez',
        capacity: 15,
        students: 10,
        duration: 60,
        level: 'Avanzado',
        sportCenterName: 'CrossFit Hub Sants',
      },
      {
        name: 'Crossfit',
        date: '2026-05-29',
        time: '08:00',
        instructor: 'Patricia Gómez',
        capacity: 15,
        students: 14,
        duration: 60,
        level: 'Avanzado',
        sportCenterName: 'CrossFit Hub Sants',
      },
      {
        name: 'Crossfit',
        date: '2026-05-29',
        time: '18:00',
        instructor: 'Roberto Díaz',
        capacity: 15,
        students: 15,
        duration: 60,
        level: 'Avanzado',
        sportCenterName: 'CrossFit Hub Sants',
      },
      {
        name: 'Strength',
        date: '2026-05-29',
        time: '20:00',
        instructor: 'Sofía Romero',
        capacity: 18,
        students: 8,
        duration: 50,
        level: 'Intermedio',
        sportCenterName: 'CrossFit Hub Sants',
      },

      // Yoga Studio Eixample
      {
        name: 'Yoga',
        date: '2026-05-29',
        time: '07:30',
        instructor: 'Elena Moreno',
        capacity: 25,
        students: 22,
        duration: 60,
        level: 'Principiante',
        sportCenterName: 'Yoga Studio Eixample',
      },
      {
        name: 'Yoga',
        date: '2026-05-29',
        time: '10:00',
        instructor: 'Javier Castillo',
        capacity: 25,
        students: 19,
        duration: 60,
        level: 'Principiante',
        sportCenterName: 'Yoga Studio Eixample',
      },
      {
        name: 'Yoga',
        date: '2026-05-29',
        time: '16:00',
        instructor: 'Marta Jiménez',
        capacity: 25,
        students: 25,
        duration: 60,
        level: 'Principiante',
        sportCenterName: 'Yoga Studio Eixample',
      },
      {
        name: 'Conditioning',
        date: '2026-05-29',
        time: '18:30',
        instructor: 'Andrés Vega',
        capacity: 20,
        students: 20,
        duration: 45,
        level: 'Intermedio',
        sportCenterName: 'Yoga Studio Eixample',
      },
    ];

    console.log('🏋️ Cargando clases...');
    for (const classData of classes) {
      await db.collection('classes').add({
        ...classData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log(`✅ ${classes.length} clases cargadas`);

    console.log('🎉 ¡Base de datos cargada exitosamente!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seedDatabase();