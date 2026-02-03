import { motion } from 'framer-motion';
import { Leaf, Smile, Coffee, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Mood = 'all' | 'calm' | 'happy' | 'cozy' | 'gift';

interface MoodSelectorProps {
    selectedMood: Mood;
    onMoodChange: (mood: Mood) => void;
}

const moods = [
    { id: 'all' as Mood, label: 'All Mugs', icon: null },
    { id: 'calm' as Mood, label: 'Calm', icon: Leaf, emoji: '🧘' },
    { id: 'happy' as Mood, label: 'Happy', icon: Smile, emoji: '😊' },
    { id: 'cozy' as Mood, label: 'Cozy', icon: Coffee, emoji: '☕' },
    { id: 'gift' as Mood, label: 'Gift-worthy', icon: Gift, emoji: '🎁' },
];

const MoodSelector = ({ selectedMood, onMoodChange }: MoodSelectorProps) => {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
                        What kind of day are you having?
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Find a mug that matches your mood
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3"
                >
                    {moods.map((mood) => (
                        <Button
                            key={mood.id}
                            onClick={() => onMoodChange(mood.id)}
                            variant={selectedMood === mood.id ? 'default' : 'outline'}
                            size="sm"
                            className={`
                rounded-full px-4 md:px-5 py-2 text-sm transition-all duration-300
                ${selectedMood === mood.id
                                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                                    : 'border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40'
                                }
              `}
                        >
                            {mood.emoji && <span className="mr-1.5">{mood.emoji}</span>}
                            {mood.label}
                        </Button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MoodSelector;
