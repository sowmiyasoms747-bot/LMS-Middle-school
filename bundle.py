import re
import os

files_order = [
    'js/data/lmsData.js',
    'js/data/quizQuestions.js',
    'js/data/challengeQuestions.js',
    'js/components/icons.js',
    'js/components/confetti.js',
    'js/components/graphics.js',
    'js/screens/dashboard.js',
    'js/screens/subjects.js',
    'js/screens/chapterList.js',
    'js/screens/videoLesson.js',
    'js/screens/quiz.js',
    'js/screens/challenges.js',
    'js/screens/assignments.js',
    'js/screens/progress.js',
    'js/screens/achievements.js',
    'js/screens/aiBuddy.js',
    'js/screens/liveClasses.js',
    'js/screens/profile.js',
    'js/app.js'
]

bundle_parts = ['// Learning Universe LMS - Unified Offline Bundle (No CORS restriction)\n(function() {\n"use strict";\n']

for fpath in files_order:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Strip import statements
    lines = content.split('\n')
    filtered_lines = []
    in_multiline_import = False
    for line in lines:
        s = line.strip()
        if in_multiline_import:
            if s.endswith(';') or ('from' in s and (s.endswith("';") or s.endswith('";'))):
                in_multiline_import = False
            continue
        if s.startswith('import ') and not s.endswith(';'):
            in_multiline_import = True
            continue
        if s.startswith('import '):
            continue
        filtered_lines.append(line)
    
    content = '\n'.join(filtered_lines)
    
    # Replace export const / export function / export default
    content = re.sub(r'^\s*export\s+const\s+', 'const ', content, flags=re.MULTILINE)
    content = re.sub(r'^\s*export\s+function\s+', 'function ', content, flags=re.MULTILINE)
    content = re.sub(r'^\s*export\s+default\s+', '', content, flags=re.MULTILINE)
    
    bundle_parts.append(f'\n// ===== Module: {fpath} =====\n')
    bundle_parts.append(content)

# Add fallback runner at the end if DOMContentLoaded already fired
bundle_parts.append('''
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(() => {
    if (!window.appInstance) {
      const app = new LMSApp();
      app.init();
    }
  }, 10);
}
''')

bundle_parts.append('\n})();\n')

bundle_content = ''.join(bundle_parts)

with open('js/bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle_content)

print('Bundle created successfully! Size:', len(bundle_content), 'bytes')
