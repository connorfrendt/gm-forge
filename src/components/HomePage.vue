<template>
    <div>
        <div>
            <header class="header">
                <router-link to="/auth" class="signup-signin auth">Sign Up/Log In</router-link>
            </header>        
        </div>
        <div class="page-wrapper">
            <h1>Generate a run-ready 2-hour D&D session in under 2 minutes.</h1>
            <h2>Built for Game Masters who want less prep and better games</h2>
            <div class="brand">GM Forge</div>
    
            <div class="button-wrapper">
                <button>Start Free 7 Day Trial</button>
                <button>Try 1 Free Session</button>
            </div>
            <div style="text-align: center; font-style: italic;">Built specifically for D&D 5e. Balanced encounters. Structured scenes. Ready to run.</div>
    
            <!--Sample Output - Visual Proof-->
            <section>
                <h3>~ Example Generated Session ~</h3>
                <div>Party Level: 5 | 4 Players</div>
                <div>Tone: Dark Fantasy</div>
                <div>Hook:</div>
                <div>A merchant caravan has vanished along Blackroot Pass. Survivors claim the attackers “moved like shadows.”</div>
                <div>Scene 1 - Investigation</div>
                <div>The party examines the abandoned wagons and finds strange arcane scorch marks and a broken obsidian charm etched with infernal script.</div>
                <div>Scene 2 - Ambush in the Ravine</div>
                <div>Bandits enhanced by shadow magic attack from elevated rock ledges. Crumbling terrain creates shifting cover.</div>
                <div>Combat Encounter:</div>
                <div>
                    <ul>
                        <li>1 Shadow-touched Veteran</li>
                        <li>4 bandits</li>
                        <li>Environmental hazard: Unstable ledges, Dex save (DC 15) or fall 10 ft (1d6 bludgeoning damage)</li>
                    </ul>
                </div>
                <div>Social Twist</div>
                <div>The bandit leader is protecting the region from a fiendish cult operating deeper in the mountains.</div>
                <div>Treasure/Resolution</div>
                <div>
                    <ul>
                        <li>120 GP</li>
                        <li>Obsidian Charm (clue to larger arc)</li>
                        <li>Map fragment pointing to ruined monastery</li>
                    </ul>
                </div>
            </section>
    
            <!--Problem Section-->
            <section class="info-section problem-section">
                <h3>Prep Eats Your Time</h3>
                <ul>
                    <li>1-3 hours outlining scenes</li>
                    <li>Balancing Encounters</li>
                    <li>Inventing NPCs</li>
                    <li>Making it all flow</li>
                </ul>
            </section>
    
            <!--How It Works-->
            <section class="info-section">
                <h3>How it works...</h3>
                <ul>
                    <li>Enter party size, level, tone</li>
                    <li>Click generate</li>
                    <li>Run your session</li>
                </ul>
            </section>
    
            <!--Pricing-->
            <section class="info-section">
                <h3>Pricing</h3>
                <div class="pricing-options">
                    <div class="subheading-wrapper">
                        <div class="subheading">Free</div>
                        <ul>
                            <li>1 session per week</li>
                            <li>Basic structure</li>
                        </ul>
                    </div>
                    
                    <div class="subheading-wrapper">
                        <div class="subheading">Pro - $15/month</div>
                        <ul>
                            <li>Unlimited sessions</li>
                            <li>Clear formatting</li>
                            <li>Regenerate variations</li>
                            <li>Built for professional GMs</li>
                        </ul>
                    </div>
    
                </div>
    
            </section>
    
            <!--FAQ-->
            <section>
                <h3>F.A.Q.</h3>
    
                <div class="faq-question">Is this just ChatGPT?</div>
                <p>No. GM Forge is structured specifically for D&D 5e with consistent formatting and encounter balancing built in.</p>
                
                <div class="faq-question">Is it balanced for D&D 5e?</div>
                <p>Yes. All output is built using official 5e math (DMG guidelines for CR, encounter budgets, spell scaling, etc.).</p>
                <p>It’s designed to be table-ready - not just creative, but mechanically sound.</p>
                <p>Always review before use - like any prep tool.</p>
    
                <div class="faq-question">Can I edit the output?</div>
                <p>Yes. Everything generated is fully editable.</p>
                <p>Copy it, tweak it, adjust CR, rename NPCs - it's yours</p>
                <p>Generate -> Edit -> Run at your table</p>
                
                <div class="faq-question">What happens after the trial?</div>
                <p>After the free trial, you can subscribe to keep generating unlimited content.</p>
                <p>No surprises.  Cancel anytime.</p>
                <p>After the trial, you can upgrade to keep generating content — or just walk away. No pressure.</p>
            </section>
    
            <section>
                <h3>Start Generating Your Next Session Now</h3>
                <div class="button-wrapper">
                    <button>Start Free Trial</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>