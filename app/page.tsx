/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
"use client"
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
// import { LexicalRichTextPlugin } from '@lexical/rich-text/LexicalRichTextPlugin';
// import { LexicalOnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import ExampleTheme from './ExampleTheme';
import TreeViewPlugin from './plugins/TreeViewPlugin';

function Placeholder() {
  return <div className="editor-placeholder">Enter some plain text...</div>;
}

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
};

export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <div className="editor-inner">
          {/* <PlainTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin /> */}
          <LexicalRichTextPlugin />
          <LexicalOnChangePlugin onChange={(editorState) => {
            editorStateRef.current = editorState;
          }} />
          <TreeViewPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
