
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.logo}
        />
        <ThemedText type="title" style={styles.title}>
          Welcome to the Mitzvah Machine!
        </ThemedText>
      </View>
      <View style={styles.navigation}>
        <Link href="/(tabs)/adventures" style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>Puppet Adventures</ThemedText>
        </Link>
        <Link href="/(tabs)/missions" style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>Mitzvah Missions</ThemedText>
        </Link>
        <Link href="/(tabs)/tracker" style={styles.navButton}>
          <ThemedText style={styles.navButtonText}>My Mitzvah Tracker</ThemedText>
        </Link>
      </View>
      <View style={styles.quoteContainer}>
        <ThemedText style={styles.quoteText}>
          "The world is built on kindness." - Pirkei Avot
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FDF5E6', // A warm, parchment-like color
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8B4513', // A warm, earthy brown
  },
  navigation: {
    width: '100%',
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#FFD700', // A bright, cheerful gold
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#8B4513',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quoteContainer: {
    marginTop: 30,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#A0522D', // A slightly lighter, warm brown
  },
});
