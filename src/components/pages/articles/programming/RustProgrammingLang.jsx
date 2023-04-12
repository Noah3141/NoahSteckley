import React from "react";
import Title from "../../../inc/Title";
import Background from "../../../inc/Background";

function RustProgrammingLang() {
  return (
    <div className="container p-3rounded-3 text-primary">
      <Title title="Rust Programming Language" className="text-danger pb-4" />
      <Background className=" bg-dark " />
      <p className="my-1">
        Rust has some differences in syntax that are pretty new to a Python
        user. Consider the following line of code:
      </p>
      <code>let mut name = String::new();</code>
      <p className="my-1">
        Rust, which ends statements with semi-colons, has a lot more going on in
        this line than the Python equivilant:
      </p>
      <code>name = str()</code>
      <p className="my-1">
        First, Rust has you declare new variables using the <i>let</i> keyword.
        This is familiar from JavaScript.
      </p>
      <code>let x = 7;</code>
      <p className="my-1">
        Rust also requires you to state whether a variable will be mutable or
        not, using the <i>mut</i> keyword during its declaration.
      </p>
      <p className="my-1">
        But what's the deal with <i>String::new()</i>?
      </p>
      <p className="my-1">
        Rust's more fundamental primitive type string is referred to with{" "}
        <i>str</i>, like Python. However, unlike Python, Rust's <i>str</i> is
        inherently immutable (kind of odd after we just introduced the idea of
        stating mutability with <i>mut</i>). The reason for this has to do with
        where variables are stored in memory.
      </p>
      <p>
        Rust, like many languages, stores its memory in several different
        locations:{" "}
        <ol>
          <li>Stack Memory:</li>
          <li>Heap Memory</li>
          <li>Global Memory</li>
          <li>Thread-local Memory</li>
          <li>Unsafe Memory</li>
          <li>Memory-mapped files</li>
          <li>Virtual Memory</li>
        </ol>
      </p>
    </div>
  );
}

export default RustProgrammingLang;
